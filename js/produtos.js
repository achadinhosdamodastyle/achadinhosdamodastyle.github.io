/*
  LISTA DE ACHADOS — é só editar este arquivo pra adicionar/remover produto.

  Como adicionar um achado:
  1. Gere o link OFICIAL de afiliado:
     - Amazon: barra SiteStripe (topo da página do produto, logado) → "Texto" → copie o link
     - Mercado Livre: Central de Afiliados → "Gerar link" (ou botão "Compartilhar" logado como afiliado)
     Nunca use encurtador de terceiros (bit.ly etc.) — viola os termos dos programas.
  2. Copie um bloco de exemplo abaixo, cole dentro dos colchetes de PRODUTOS e preencha.
  3. "loja": "ml" ou "amazon"   |   "categoria": "bolsas", "calcados", "roupas" ou "acessorios"
     (acessórios = cinto, óculos, lenço, chapéu, carteira... NUNCA joias ou relógios)
  4. "preco": texto livre (ex: "R$ 89,90"). Preço muda — o site já avisa isso ao lado.
  5. "imagem": link da foto no servidor oficial da loja (http2.mlstatic.com no ML,
     m.media-amazon.com na Amazon). Não baixe e re-suba a foto: o site só exibe a
     imagem direto da loja. Pode deixar "" (vazio) que aparece um placeholder.

  Exemplo (copie, tire as barras // do começo e preencha):
  // {
  //   nome: "Bolsa tiracolo matelassê",
  //   descricao: "Cabe celular, carteira e chave. Alça regulável.",
  //   preco: "R$ 79,90",
  //   loja: "ml",
  //   categoria: "bolsas",
  //   link: "COLE_AQUI_O_LINK_OFICIAL_DE_AFILIADO",
  //   imagem: ""
  // },
*/

const PRODUTOS = [
  // O site mostra do ÚLTIMO para o primeiro: o produto do vídeo mais recente fica no fim da lista.
  {
    nome: "Bolsa transversal com alça de mão Selten",
    descricao: "Usa no ombro ou na mão. Nota 4,8 com mais de 5 mil vendidas.",
    preco: "R$ 57,99",
    loja: "ml",
    categoria: "bolsas",
    link: "https://meli.la/1oyexUe",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_985380-MLA100012955611_122025-O.webp"
  },
  {
    nome: "Tênis branco feminino Vili",
    descricao: "Para caminhada, academia e dia a dia. Nota 4,8 com mais de 100 mil vendidos.",
    preco: "R$ 78,06 no Pix",
    loja: "ml",
    categoria: "calcados",
    link: "https://meli.la/2jChAH8",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_795481-MLB100773958822_122025-O.webp"
  },
  {
    nome: "Bolsa matelassê com alça de corrente",
    descricao: "Transversal, em couro PU matelassê. Nota 4,8 com mais de 10 mil vendidas.",
    preco: "R$ 68,68",
    loja: "ml",
    categoria: "bolsas",
    link: "https://meli.la/2j97H5u",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_605892-MLA99934977359_112025-O.webp"
  }
];
