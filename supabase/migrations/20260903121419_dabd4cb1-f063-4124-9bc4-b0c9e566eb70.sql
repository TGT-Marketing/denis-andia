CREATE TYPE public.app_role AS ENUM ('admin', 'editor', 'user');

CREATE TABLE public.profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email text,
  full_name text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "own profile read" ON public.profiles FOR SELECT TO authenticated USING (auth.uid() = id);
CREATE POLICY "own profile update" ON public.profiles FOR UPDATE TO authenticated USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role public.app_role)
RETURNS boolean LANGUAGE sql STABLE SECURITY DEFINER SET search_path = public AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE POLICY "read own roles" ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id OR public.has_role(auth.uid(), 'admin'));
CREATE POLICY "admins manage roles" ON public.user_roles FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger LANGUAGE plpgsql SECURITY DEFINER SET search_path = public AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data ->> 'full_name')
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;
CREATE TRIGGER on_auth_user_created AFTER INSERT ON auth.users FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS trigger LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END;
$$;

CREATE TABLE public.news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  title text NOT NULL,
  subtitle text,
  excerpt text,
  content text NOT NULL DEFAULT '',
  category text,
  image_url text,
  status text NOT NULL DEFAULT 'draft',
  featured boolean NOT NULL DEFAULT false,
  published_at timestamptz NOT NULL DEFAULT now(),
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.news TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.news TO authenticated;
GRANT ALL ON public.news TO service_role;
ALTER TABLE public.news ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public reads published news" ON public.news FOR SELECT USING (status = 'published' OR public.has_role(auth.uid(), 'admin'));
CREATE POLICY "admins manage news" ON public.news FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE TRIGGER news_updated_at BEFORE UPDATE ON public.news FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.banners (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text,
  text text,
  image_url text,
  link_url text,
  active boolean NOT NULL DEFAULT true,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.banners TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.banners TO authenticated;
GRANT ALL ON public.banners TO service_role;
ALTER TABLE public.banners ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public reads active banners" ON public.banners FOR SELECT USING (active = true OR public.has_role(auth.uid(), 'admin'));
CREATE POLICY "admins manage banners" ON public.banners FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE TRIGGER banners_updated_at BEFORE UPDATE ON public.banners FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.gallery_images (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  album text NOT NULL DEFAULT 'geral',
  image_url text NOT NULL,
  caption text,
  sort_order integer NOT NULL DEFAULT 0,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.gallery_images TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.gallery_images TO authenticated;
GRANT ALL ON public.gallery_images TO service_role;
ALTER TABLE public.gallery_images ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public reads gallery" ON public.gallery_images FOR SELECT USING (true);
CREATE POLICY "admins manage gallery" ON public.gallery_images FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));
CREATE TRIGGER gallery_updated_at BEFORE UPDATE ON public.gallery_images FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.site_settings (
  key text PRIMARY KEY,
  value text,
  label text,
  updated_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.site_settings TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.site_settings TO authenticated;
GRANT ALL ON public.site_settings TO service_role;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;
CREATE POLICY "public reads settings" ON public.site_settings FOR SELECT USING (true);
CREATE POLICY "admins manage settings" ON public.site_settings FOR ALL TO authenticated USING (public.has_role(auth.uid(), 'admin')) WITH CHECK (public.has_role(auth.uid(), 'admin'));

INSERT INTO public.site_settings (key, value, label) VALUES
  ('site_title', 'Denis Andia — Gente que conhece gente', 'Título do site'),
  ('site_description', 'Site oficial do candidato Denis Andia. Um novo jeito de fazer política em São Paulo e no Brasil.', 'Descrição do site'),
  ('contact_email', '', 'E-mail de contato'),
  ('contact_phone', '', 'Telefone de contato'),
  ('instagram_url', '', 'Instagram'),
  ('facebook_url', '', 'Facebook'),
  ('youtube_url', '', 'YouTube');

CREATE POLICY "public reads media" ON storage.objects FOR SELECT USING (bucket_id = 'media');
CREATE POLICY "admins upload media" ON storage.objects FOR INSERT TO authenticated WITH CHECK (bucket_id = 'media' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "admins update media" ON storage.objects FOR UPDATE TO authenticated USING (bucket_id = 'media' AND public.has_role(auth.uid(), 'admin'));
CREATE POLICY "admins delete media" ON storage.objects FOR DELETE TO authenticated USING (bucket_id = 'media' AND public.has_role(auth.uid(), 'admin'));

INSERT INTO public.news (slug, title, excerpt, content, category, image_url, status, featured, published_at, sort_order) VALUES
(
  'eleicoes-2026-denis-andia-desponta-como-principal-nome-da-regiao',
  $tx$Eleições 2026: Denis Andia desponta como principal nome da região$tx$,
  $tx$Nas eleições deste ano, Santa Bárbara d’Oeste, Americana e região podem voltar a ter um Deputado Federal em Brasília. Com poucos candidatos locais na disputa, destaca-se o nome do ex-prefeito Denis Andia.$tx$,
  $tx$Nas eleições deste ano, Santa Bárbara d’Oeste, Americana e região podem voltar a ter um Deputado Federal em Brasília. Com poucos candidatos locais na disputa, destaca-se o nome do ex-prefeito de Santa Bárbara d’Oeste, Denis Andia, que possui forte expressão regional.

Em 2022, Denis esteve muito próximo da eleição em sua primeira tentativa, sendo o candidato a Deputado Federal mais votado da Região Metropolitana de Campinas, com 75 mil votos. Ficou na suplência, a apenas 4.900 votos de conquistar uma cadeira na Câmara dos Deputados.

Considerando apenas as cidades de Santa Bárbara d’Oeste, Americana e Nova Odessa, Denis Andia somou expressivos 68.291 votos, bem à frente de Vanderlei Macris (19.741) e Maria Giovana (18.343). Dos três nomes, apenas Denis Andia disputará as eleições para Deputado Federal neste ano, o que pode ampliar sua votação local e garantir uma vaga em Brasília para a região.

Já para Deputado Estadual, a região conta com alguns candidatos com chances de sucesso, como Franco Sardelli e Ricardo Molina, de Americana, além de Esther Moraes e Celso Ávila, de Santa Bárbara d’Oeste.

É importante lembrar que Ricardo Molina esteve próximo da eleição em 2022, quando ficou na suplência, e pode repetir o bom desempenho na região. Franco, filho do prefeito Chico Sardelli, disputará pela primeira vez, mas conta com o apoio da estrutura política do pai. Em Santa Bárbara d’Oeste, Esther Moraes foi a vereadora mais votada em 2024 e aparece como uma das principais promessas. Já Celso Ávila tem no histórico quatro eleições seguidas como vereador.

A região já teve quatro deputados eleitos ao mesmo tempo e pode voltar a ter representantes tanto na Assembleia Legislativa de São Paulo quanto na Câmara dos Deputados, em Brasília. O desafio, neste momento, é o eleitor compreender essa nova oportunidade e focar nos candidatos locais com maior potencial eleitoral.$tx$,
  'Eleições 2026',
  '/__l5e/assets-v1/a2d02479-b07c-4b7e-8f72-66571f5f3dfb/news_1.jpeg',
  'published', true, now(), 1
),
(
  'denis-andia-defende-mandato-real',
  $tx$Denis Andia defende “mandato real” e coloca experiência a serviço dos Municípios$tx$,
  $tx$Pré-candidato a deputado federal, Denis Andia apresenta uma proposta baseada na proximidade com a população e na busca por soluções concretas para os desafios do dia a dia.$tx$,
  $tx$Pré-candidato a deputado federal, Denis Andia apresenta uma proposta baseada na proximidade com a população, no diálogo com as cidades e na busca por soluções concretas para os desafios do dia a dia.

Com o conceito de “mandato real”, Denis afirma que pretende atuar de forma próxima das pessoas, trabalhando diretamente nas necessidades da população e fortalecendo a relação entre Brasília e os municípios.

Entre as prioridades defendidas pelo pré-candidato estão a melhoria do transporte público, a redução gradual da tarifa e o fortalecimento das entidades e serviços que atendem a população. Denis também destaca a importância do Marco Legal do Transporte Público, aprovado pelo Congresso Nacional, como instrumento para ampliar investimentos e melhorar a mobilidade urbana.

“Meu trabalho sempre foi na linha construtiva, buscando melhorias reais para as pessoas. Quero levar essa experiência para Brasília e ampliar ainda mais a capacidade de trazer recursos e investimentos para os municípios”, afirma.

Denis Andia ressalta ainda sua experiência na administração pública e na articulação de verbas para cidades brasileiras durante sua atuação como secretário nacional de mobilidade urbana. Segundo ele, como deputado federal será possível ampliar esse trabalho, representando cerca de 40 a 50 municípios de forma ativa e próxima.

“Precisamos aproximar Brasília das cidades. Quem vive a realidade da população sabe onde estão as prioridades”, destaca.

Ao lembrar sua trajetória política, Denis afirma que aproveitou as oportunidades recebidas dos barbadenses para desenvolver um trabalho voltado à transformação de Santa Bárbara d’Oeste e à melhoria da qualidade de vida da população.$tx$,
  'Mandato Real',
  '/__l5e/assets-v1/1a4b4403-613b-4a8e-9689-acfb7bf32209/news_2.jpeg',
  'published', false, now() - interval '1 day', 2
),
(
  'denis-andia-transporte-publico-mais-acessivel',
  $tx$Denis Andia trabalha por um transporte público mais acessível$tx$,
  $tx$Um programa nacional que visa reduzir as tarifas de ônibus é um dos trabalhos já iniciados por Denis Andia à frente da Secretaria Nacional de Mobilidade Urbana.$tx$,
  $tx$Um programa nacional que visa reduzir as tarifas de ônibus é um dos trabalhos já iniciados por Denis Andia à frente da Secretaria Nacional de Mobilidade Urbana.

O primeiro e importante passo para isso foi a aprovação do Marco Legal do Transporte Público, nova lei apresentada e liderada pelo ex-prefeito barbarense em Brasília, aprovada e sancionada.

A partir dessa lei, que reorganiza as atividades e operações do transporte público em todo o Brasil, abrem-se as portas para a criação do Sistema Único de Mobilidade Urbana (SUM) — uma espécie de SUS do transporte público coletivo, visando integrar investimentos federais, estaduais e municipais para garantir tarifas menores aos brasileiros.

“Algumas etapas já foram superadas para a criação do SUM. Ampliamos os investimentos em infraestrutura, renovação de frotas e agora temos o Novo Marco Legal, que permite a construção de um programa de financiamento que vai reduzir as tarifas em todas as cidades do Brasil”, afirma Denis Andia.

A ideia é permitir que os governos estaduais e a União também possam investir nos sistemas, para que os preços das passagens fiquem menores para os usuários. Atualmente, o governo federal já conta com recursos arrecadados, mas não integralmente utilizados para essa finalidade, como os provenientes do vale-transporte dos trabalhadores. O SUM permitirá canalizar essa e outras fontes de recursos em benefício dos passageiros.

“Quanto mais acessível for o transporte público para o cidadão, mais pessoas o utilizarão. E, com mais pessoas no transporte público, haverá menos carros e motos nas ruas. Trânsito melhor, maior mobilidade urbana e menos acidentes. Todos ganham”, ressalta Andia.

Essa é uma ideia antiga que começou a sair do papel para se tornar realidade, em grande parte devido ao trabalho técnico e político conduzido pelo ex-prefeito barbarense em Brasília.

“Muitos prefeitos sonham com a Tarifa Zero no transporte público. Esse é o caminho para que ela se torne realidade. Quando administrei Santa Bárbara d’Oeste, implantei a tarifa zero aos sábados. Isso mudou a dinâmica da cidade e fortaleceu muito o comércio local, reflexo que permanece até hoje. Essa experiência foi pioneira no Brasil e passou a ser referência em todo o país”, lembrou Denis.

Agora, como pré-candidato a deputado federal, Denis Andia pretende trabalhar pela aprovação das leis complementares que permitirão ao SUM avançar e ser implantado.$tx$,
  'Mobilidade Urbana',
  '/__l5e/assets-v1/e4bc72f5-3ddc-4c1f-802f-ce8d1d54f4e2/news_mobilidade.jpg',
  'published', false, now() - interval '2 day', 3
),
(
  'o-caminho-de-casa-por-denis-andia',
  $tx$O CAMINHO DE CASA - Por Denis Andia$tx$,
  $tx$Há caminhos que mudam de paisagem, mas nunca mudam de destino. E agora, o tempo faz mais uma curva bonita. Voltei para uma nova caminhada.$tx$,
  $tx$Por Denis Andia

Há caminhos que mudam de paisagem, mas nunca mudam de destino.

Nos últimos anos, o trabalho me levou a Brasília, onde portas precisavam ser abertas, pontes construídas, para ajudar nossas cidades no desafio de crescer.

Trabalho que fez sentido porque tinha endereço certo: a nossa gente.

Por isso, toda semana, eu voltava. Voltava para rever os olhos conhecidos, escutar uma conversa na calçada. Porque é no encontro que a gente aprende. É ouvindo que a gente entende. É caminhando junto que a gente acerta o passo.

E agora, o tempo faz mais uma curva bonita. Voltei para uma nova caminhada. Não para começar de novo, mas para continuar o que a gente nunca deixou de lado: fazer o certo, para fazer bem feito!

Nestes primeiros meses, a região me convidou para conhecê-la ainda melhor. Aceitei com prazer e honra. Visitei cidades e lugares onde o nosso trabalho já havia chegado.

Agora é hora de andar pelas nossas ruas, entrar nos nossos bairros, ouvir quem acorda cedo, quem trabalha duro. Quero escutar mais do que falar. Aprender mais. Juntar forças e esforços - como sempre fizemos juntos.

Afinal, a nossa história você sabe que é de verdade, porque você a viu acontecer. Compromisso que não muda, de quem carrega a sua gente dentro do peito e que por onde vai, sabe o caminho de casa.

Vamos em frente!$tx$,
  'Artigo',
  '/__l5e/assets-v1/ef185898-93f6-4eb0-b1b9-208e9d5f767c/news_caminho_casa.jpg',
  'published', false, now() - interval '3 day', 4
);