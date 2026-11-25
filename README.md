# Template de landing page / catálogo para lojas

Página estática (HTML + CSS + JS, sem build). Tudo que muda de uma loja para outra fica em **`config/storeConfig.js`**.

## Como usar
1. Abra `config/storeConfig.js` e substitua os textos entre parênteses, ex.: `(produto 1)`.
2. Coloque as imagens da loja em `assets/` e aponte para elas na config (`hero.image`, `story.image`, `img` de cada produto). Enquanto isso, `assets/placeholder.svg` é usado.
3. Ajuste a paleta em `theme.colors` e as fontes em `theme.fonts`.
4. Abra `index.html` no navegador (ou publique a pasta em qualquer hospedagem estática).

## Estrutura
- `index.html`: layout das seções (textos marcados com `data-*`)
- `style.css`: estilos (cores e fontes vêm de variáveis CSS)
- `applyConfig.js`: aplica tema, textos, imagens e listas da config
- `script.js`: catálogo, carrinho, planner, depoimentos e pedido por WhatsApp
- `config/storeConfig.js`: **único arquivo a editar**

## O que preencher
- `identity`, `contact` (WhatsApp só com dígitos: DDI + DDD + número)
- `theme` (cores e fontes)
- Textos: `hero`, `featured`, `story`, `howItWorks`, `differentiators`, `partners`, `testimonials`, `footer`
- `catalog`: `tags` (filtros) e `products` (`id` único, `bestseller: true` aparece em Destaques)
- `menu`, `cart`, `planner` (use `planner.enabled: false` para remover o planejador semanal)
