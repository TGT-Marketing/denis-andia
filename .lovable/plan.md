## Escopo

Aplicar as alterações solicitadas em todo o site, mantendo identidade visual e usando placeholders onde não há mídia final.

## 1. Hero (Home)

- Composição com duas fotos alternando com **crossfade suave** (5s por foto):
  - Foto A: Denis com senhor de chapéu (`denis-chapeu.jpg`)
  - Foto B: Denis com a menina (`denis-menina.jpg`)
- Sobreposição de degradê transparente (escuro → transparente) para legibilidade.
- **Lado esquerdo**: frase "ABRACE O NOVO" grande, com animação de entrada (fade + slide-up).
- **Nome "Denis Andia"** em tipografia forte, posicionado logo abaixo da altura da mão do Denis na foto, com animação escalonada.
- **Lado direito**: botão play com texto "Conheça a história de Denis Andia" — abre `VideoModal` com placeholder do vídeo "Gente que conhece gente".
- **Faixa inferior** horizontal em 3 blocos: verde `#0D9344`, amarelo `#FEEE02`, azul `#B9CEE8`, largura total.
- Remover o "DENIS ANDIA" gigante de fundo atual e a foto recortada isolada — a estrutura muda para foto-composição fullscreen.

## 2. Seção "O Trabalho Já Chegou"

- Título da seção alterado para "O TRABALHO JÁ CHEGOU".
- Layout em duas colunas:
  - Esquerda: foto recortada do Denis com **capacete em obra** (usar `denis-cutout.png` já existente).
  - Direita: **Mapa do Estado de São Paulo** (SVG) — substitui o mapa do Brasil atual.
- Cores do mapa:
  - RMC e RMP: **azul royal escuro** com contorno destaque.
  - Demais regiões: **azul claro**.
  - Hover: clareamento + cursor pointer.
- Ao clicar numa região, abre painel inline (sem redirect) com **lista de vídeos das cidades** daquela região (placeholders `<video>`).
- Mapa SP com regiões administrativas simplificadas (paths SVG customizados agrupando: RMC, RMP, RM São Paulo, RM Baixada Santista, Vale do Paraíba, Sorocaba, Ribeirão Preto, S.J. Rio Preto, Bauru, Marília, Presidente Prudente, Araçatuba, Franca, Central, Itapeva).

## 3. Seção Notícias

- Fundo **branco** puro.
- Carrossel com Embla: autoplay + navegação manual (setas + dots).
- Cada slide: imagem, título, resumo, botão "Ler mais".

## 4. Rodapé

- **Esquerda**: imagem "Denis abraçando criança com colinha no braço" (placeholder — gerar via imagegen).
- **Direita**: logotipo + slogan "Gente que conhece gente" + ícones oficiais Facebook, Instagram, X.
- Manter fundo/estrutura atual, apenas reorganizar conteúdo.

## 5. Páginas novas / atualizadas

### `/sua-cidade` — Por Sua Cidade
- Hero com **vídeo do Denis** (placeholder) + texto institucional.
- Seções: Legado em Santa Bárbara d'Oeste · Fim da Favela · SUS Zerado · Melhor Nota da Educação.
- Cada seção com título, descrição e **carrossel de imagens** (placeholders).

### `/nossa-gente` — Por Nossa Gente
- Reutiliza o **mesmo mapa interativo de SP** da seção "O Trabalho Já Chegou".
- Componente `<SaoPauloMap>` compartilhado.

### `/pelo-brasil` — Pelo Brasil
- Mesmo layout de `/sua-cidade`.
- Seções: Macroprojetos · Atuação como Secretário Nacional de Mobilidade · Sobre Denis.

### `/biografia` — Biografia (nova rota)
- Página institucional: história, **linha do tempo** vertical, galeria de fotos, blocos de conteúdo.
- Design moderno e elegante, tipografia serif de destaque.
- Adicionar link no header.

## 6. Diretrizes técnicas

- Componentes novos/refatorados:
  - `HeroSlideshow.tsx` (crossfade + animações do hero)
  - `SaoPauloMap.tsx` (mapa SP interativo com painel de vídeos inline)
  - `RegionVideoPanel.tsx` (grid de vídeos da região selecionada)
  - `ProjectCarousel.tsx` (carrossel de imagens por projeto)
  - `Timeline.tsx` (biografia)
- Todas as animações via classes utilitárias já existentes (`animate-fade-in`, `animate-scale-in`) + transições CSS. Sem novas libs.
- Cada rota com seu `head()` próprio (title, description, og:*).
- Placeholders identificados: `data-placeholder="video|image"` para futura substituição.
- Mobile-first, breakpoints revisados em todas as seções.
- Manter tokens semânticos em `src/styles.css`, sem cores hardcoded.

## Ordem de execução

1. Novos assets (gerar imagem "Denis abraçando criança" placeholder).
2. Refatorar Hero + faixa tricolor.
3. Novo `SaoPauloMap` + painel inline; substituir na home.
4. Notícias fundo branco.
5. Rodapé reorganizado.
6. Página `/sua-cidade` com projetos + carrosséis.
7. `/nossa-gente` reutilizando mapa SP.
8. `/pelo-brasil` (mesmo layout de sua-cidade).
9. `/biografia` nova rota + link no header.
10. Verificar build.
