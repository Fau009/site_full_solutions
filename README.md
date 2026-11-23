# Full Solutions — site institucional

Site estático (HTML/CSS/JS puro) da **Full Solutions**, consultoria de construção de sites personalizados. Instalável como app (PWA) e hospedado no **GitHub Pages**.

> Slogan: **Make your future yourself** · símbolo: mão com lâmpada (`logo.svg`).

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

## PWA (instalável)
- `manifest.json` + `sw.js` (service worker, cache leve/offline básico).
- Ícones em `icons/` (192, 512, maskable, apple-touch).
- Link discreto **"Baixe o app"** (aparece quando o navegador permite instalar) e **"Central de projetos"** → `https://fau009.github.io`, apenas na home.

## Rodar localmente
```
python3 -m http.server 8080
```
e acesse `http://localhost:8080`.

## Deploy (GitHub Pages via Actions)
Publicado automaticamente pelo workflow `.github/workflows/deploy.yml` a cada push na `main`
(`configure-pages` com `enablement: true` ativa o Pages na primeira execução).
URL: `https://fau009.github.io/site_full_solutions/`.
Links internos são relativos, então funciona na raiz ou no subcaminho do Pages.

## Ajustes pendentes (preencher)
- **Contato:** trocar `contato@fullsolutions.com.br` (em `contato.html`) e o número do WhatsApp (`wa.me/5500000000000`) pelos reais.
