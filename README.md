# Achadinhos da Moda — site

Site estático (HTML/CSS/JS puro, sem backend e sem bibliotecas externas) para GitHub Pages.

## Estrutura
- `index.html`: vitrine de achados com filtro por categoria
- `js/produtos.js`: **o único arquivo que você edita para adicionar produtos** (instruções dentro dele)
- `sobre.html`: transparência, aviso de afiliado e privacidade (serve de base para os cadastros)
- `guias/`: artigos para tráfego do Google
- `robots.txt` e `sitemap.xml`: ajudam o Google a encontrar as páginas

## Publicar no GitHub Pages
1. Repositório público `achadinhosdamodastyle.github.io` na conta `achadinhosdamodastyle`
2. Envie todos estes arquivos para a raiz do repositório
3. Settings → Pages → Source: "Deploy from a branch" → branch `main`, pasta `/ (root)`
4. Em 1 a 5 minutos o site fica no ar em https://achadinhosdamodastyle.github.io
5. Confirme que "Enforce HTTPS" está marcado

Se mudar o endereço (ex.: domínio próprio), troque a URL no `robots.txt` e no `sitemap.xml`.

## Regras
- Links de afiliado: só do SiteStripe (Amazon) ou do gerador oficial do Mercado Livre. Links de outros domínios são ignorados automaticamente pelo site.
- Não usar fotos copiadas dos anúncios; use foto própria ou deixe `imagem: ""`.
- Sem joias ou relógios.
