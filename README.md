# FullSolutions — site institucional

Site estático (HTML/CSS/JS puro) da **FullSolutions**, consultoria de construção de sites personalizados. Hospedado no **GitHub Pages**.

## Páginas
- `index.html` — Início (home)
- `produto.html` — Nosso produto (planos, processo, diferenciais)
- `portfolio.html` — Portfólio (Fortuny One, Clio, Coliseu Nerd)
- `sobre.html` — Sobre (abordagem e princípios)
- `quem-somos.html` — Quem somos (história e valores)
- `contato.html` — Contato (formulário via `mailto`, sem backend)

## Identidade visual
- Navy profundo `#0a1628` + gradiente azul→cyan (`#2563eb → #06b6d4`), acento âmbar `#f59e0b`.
- Fontes: **Sora** (títulos) + **Inter** (corpo), via Google Fonts.
- Tokens de cor e componentes em `css/styles.css`.

## Rodar localmente
Abra `index.html` no navegador, ou sirva a pasta:
```
python3 -m http.server 8080
```
e acesse `http://localhost:8080`.

## Deploy (GitHub Pages)
Publicado a partir da branch `main` (raiz `/`). URL: `https://fau009.github.io/site_full_solutions/`.
Links internos são relativos, então funciona tanto na raiz quanto no subcaminho do Pages.

## Ajustes pendentes (preencher)
- **Contato:** trocar `contato@fullsolutions.com.br` (em `contato.html`) e o número do WhatsApp (`wa.me/5500000000000`) pelos reais.
- **Portfólio:** confirmar os links de **Clio** e **Coliseu Nerd** (marcados com `data-link-pendente`). O da Fortuny One já aponta para `fortunyone.com.br`.
