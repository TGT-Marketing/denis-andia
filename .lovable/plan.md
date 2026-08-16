# Plano de Padronização de Responsividade Mobile

Este plano visa padronizar e otimizar a experiência mobile em todo o site, garantindo que o layout seja consistente, as fontes sejam legíveis e os elementos visuais se adaptem corretamente a telas menores.

## Ações Propostas

### 1. Home (`src/routes/index.tsx`)
- **Hero:** Ajustar o tamanho e espaçamento dos botões e textos para evitar cortes.
- **Seção Trabalho:** Refinar o posicionamento absoluto da imagem do Denis e do mapa no mobile para garantir que o título não seja sobreposto.
- **Notícias:** Garantir que o carrossel e o título ocupem a largura total disponível sem excesso de padding lateral.

### 2. Cabeçalho e Rodapé (`src/components/site/Header.tsx`, `src/components/site/Footer.tsx`)
- **Header:** Ajustar o tamanho da logo no mobile para não ocupar espaço excessivo quando scrolled.
- **Footer:** Otimizar o background no mobile (uso de `bg-cover` vs `bg-contain`) e o alinhamento dos ícones sociais e textos de crédito.

### 3. Mapa Interativo (`src/components/site/RegionMap.tsx`)
- **Legibilidade:** Garantir que os labels RMC/RMP e as linhas indicadoras fiquem perfeitamente visíveis em telas estreitas (iPhone SE, etc.).
- **Escalabilidade:** Ajustar a escala base do SVG para mobile.

### 4. Páginas Internas (`biografia.tsx`, `sua-cidade.tsx`, `nossa-gente.tsx`, `pelo-brasil.tsx`)
- **Tipografia:** Aplicar escalas de fonte mais agressivas (menores) no mobile para títulos longos.
- **Layout:** Converter layouts de 2 colunas para 1 coluna de forma fluida, ajustando margens e paddings.
- **Carrosséis:** Verificar se o `GalleryCarousel` está com a largura correta e navegação acessível no toque.

## Detalhes Técnicos
- Uso de classes `clamp()` para tamanhos de fonte fluidos.
- Padronização de paddings horizontais (`px-4` no mobile, `md:px-10` no desktop).
- Ajustes de `z-index` e `position: relative/absolute` para evitar sobreposições indesejadas em telas pequenas.
- Verificação de `overflow-x-hidden` no container principal para evitar scroll lateral acidental.
