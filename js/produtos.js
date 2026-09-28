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
  //   num: 25,                      (próximo número livre; nunca reutilize um número)
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
  // Ordem no site: o produto com destaque: true (o do vídeo mais recente) aparece primeiro,
  // depois do número maior pro menor. Link direto de cada um: achadinhosdamodastyle.github.io/#p<número>
  {
    num: 1,
    nome: "Bolsa matelassê com alça de corrente",
    descricao: "Transversal, em couro PU matelassê. Nota 4,8 com mais de 10 mil vendidas.",
    preco: "R$ 68,68",
    loja: "ml",
    categoria: "bolsas",
    link: "https://meli.la/2j97H5u",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_605892-MLA99934977359_112025-O.webp"
  },
  {
    num: 2,
    nome: "Tênis branco feminino Vili",
    descricao: "Para caminhada, academia e dia a dia. Nota 4,8 com mais de 100 mil vendidos.",
    preco: "R$ 78,06 no Pix",
    loja: "ml",
    categoria: "calcados",
    link: "https://meli.la/2jChAH8",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_795481-MLB100773958822_122025-O.webp"
  },
  {
    num: 3,
    nome: "Bolsa transversal com alça de mão Selten",
    descricao: "Usa no ombro ou na mão. Nota 4,8 com mais de 5 mil vendidas.",
    preco: "R$ 57,99",
    loja: "ml",
    categoria: "bolsas",
    link: "https://meli.la/1oyexUe",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_985380-MLA100012955611_122025-O.webp"
  },
  {
    num: 4,
    nome: "Bolsa de ombro Romantic Crown",
    descricao: "Fecho magnético, cabe celular, chave e batom. Vem em caixa de presente. Nota 4,8.",
    preco: "R$ 69,11",
    loja: "amazon",
    categoria: "bolsas",
    link: "https://link.amazon/B06cu4HpJ",
    imagem: "https://m.media-amazon.com/images/I/617mG6IFk+L._AC_SL500_.jpg",
    destaque: true
  },
  {
    num: 5,
    nome: "Bolsa transversal casual para o dia a dia",
    descricao: "Nota 4,9 com mais de 10 mil vendidas.",
    preco: "R$ 65,98",
    loja: "ml",
    categoria: "bolsas",
    link: "https://meli.la/2Gboyga",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_697764-MLB109397241736_042026-O-bolsa-feminina-casual-transversal-dia-dia.webp"
  },
  {
    num: 6,
    nome: "Bolsa transversal esportiva com chaveiro pompom",
    descricao: "Pra academia e passeio. Nota 4,9 com mais de 10 mil vendidas.",
    preco: "R$ 56,99",
    loja: "ml",
    categoria: "bolsas",
    link: "https://meli.la/2d7UeNv",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_600328-MLA99626318615_112025-O.webp"
  },
  {
    num: 7,
    nome: "Bolsa transversal pequena de ombro",
    descricao: "Pequena, pra sair à noite. Nota 4,7 com mais de 10 mil vendidas.",
    preco: "R$ 36,76",
    loja: "ml",
    categoria: "bolsas",
    link: "https://meli.la/23eANWe",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_732326-MLB91901508400_092025-O-bolsa-transversal-pequena-de-ombro-feminina-top-balada.webp"
  },
  {
    num: 8,
    nome: "Bolsa transversal média baú",
    descricao: "Modelo baú, tiracolo. Nota 4,9 com mais de 10 mil vendidas.",
    preco: "R$ 76,62",
    loja: "ml",
    categoria: "bolsas",
    link: "https://meli.la/1aqEZ1b",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_753316-MLB83148238526_032025-O-bolsa-feminina-transversal-media-bau-tiracolo-promoco-preta.webp"
  },
  {
    num: 9,
    nome: "Tênis ortopédico feminino",
    descricao: "Pra academia, corrida e dia a dia. Nota 4,8 com mais de 10 mil vendidos.",
    preco: "R$ 74,90",
    loja: "ml",
    categoria: "calcados",
    link: "https://meli.la/2UL7Z5V",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_660299-MLB87224265979_072025-O-tnis-ortopedico-feminino-academia-casual-running-corrida.webp"
  },
  {
    num: 10,
    nome: "Rasteirinha metalizada",
    descricao: "Leve, pro verão. Nota 4,8 com mais de 5 mil vendidas.",
    preco: "R$ 54,90",
    loja: "ml",
    categoria: "calcados",
    link: "https://meli.la/2gKNbwp",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_989240-MLB111191161017_052026-O-sandalia-rasteira-rasteirinha-feminina-leve-metalizada-vero.webp"
  },
  {
    num: 11,
    nome: "Rasteirinha Moleca",
    descricao: "Nota 4,8 com mais de 5 mil vendidas.",
    preco: "R$ 46,00",
    loja: "ml",
    categoria: "calcados",
    link: "https://meli.la/2XVsiiK",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_666868-MLB91377954631_082025-O-sandalias-moleca-rasteirinha-feminina.webp"
  },
  {
    num: 12,
    nome: "Tênis Vizzano casual sneaker",
    descricao: "Tênis casual da Vizzano. Nota 4,6 na Amazon.",
    preco: "R$ 134,48",
    loja: "amazon",
    categoria: "calcados",
    link: "https://www.amazon.com.br/dp/B0GTR5KM2M?tag=achadinh0a062-20",
    imagem: "https://m.media-amazon.com/images/I/615mC4EV8RL._AC_SL500_.jpg"
  },
  {
    num: 13,
    nome: "Sandália Vizzano salto bloco",
    descricao: "Salto bloco baixo, confortável. Nota 4,8 na Amazon.",
    preco: "R$ 69,46",
    loja: "amazon",
    categoria: "calcados",
    link: "https://www.amazon.com.br/dp/B0BPCZK4NX?tag=achadinh0a062-20",
    imagem: "https://m.media-amazon.com/images/I/515HpGXerrL._AC_SL500_.jpg"
  },
  {
    num: 14,
    nome: "Calça jeans wide leg cintura alta",
    descricao: "Pantalona. Mais de 100 mil vendidas no Mercado Livre.",
    preco: "R$ 59,99",
    loja: "ml",
    categoria: "roupas",
    link: "https://meli.la/2Y7gtt8",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_952158-MLB117534658949_092026-O-calca-jeans-wide-leg-feminina-cintura-alta-pantalona.webp"
  },
  {
    num: 15,
    nome: "Calça alfaiataria wide leg",
    descricao: "Cintura alta, social. Nota 4,7 com mais de 11 mil avaliações.",
    preco: "R$ 45,81",
    loja: "ml",
    categoria: "roupas",
    link: "https://meli.la/1iBdBmc",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_750390-MLB87894346877_072025-O-calca-alfaiataria-feminina-wide-leg-social-cintura-alta.webp"
  },
  {
    num: 16,
    nome: "Vestido midi com babados",
    descricao: "Casual ou festa. Nota 4,9 com mais de 10 mil vendidos.",
    preco: "R$ 97,74",
    loja: "ml",
    categoria: "roupas",
    link: "https://meli.la/1iVJ6BM",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_950636-MLB109215730365_032026-O-vestido-midi-feminino-babados-festa-casual-elegante-premium.webp"
  },
  {
    num: 17,
    nome: "Vestido midi canelado com fenda",
    descricao: "Básico, com manga. Nota 4,6.",
    preco: "R$ 32,00",
    loja: "ml",
    categoria: "roupas",
    link: "https://meli.la/1ycnv6Y",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_653882-MLA104992202471_012026-O-vestido-canelado-midi-c-manga-e-fenda-lateral-casual-basico.webp"
  },
  {
    num: 18,
    nome: "Camiseta Hering básica gola V",
    descricao: "O básico que combina com tudo. Nota 4,6 na Amazon.",
    preco: "R$ 29,99",
    loja: "amazon",
    categoria: "roupas",
    link: "https://www.amazon.com.br/dp/B09DB1VVS9?tag=achadinh0a062-20",
    imagem: "https://m.media-amazon.com/images/I/51Ns3mwrBSL._AC_SL500_.jpg"
  },
  {
    num: 19,
    nome: "Óculos de sol Viale quadrado",
    descricao: "Nota 4,8 com mais de 10 mil vendidos.",
    preco: "R$ 69,30",
    loja: "ml",
    categoria: "acessorios",
    link: "https://meli.la/1MkLnu1",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_874539-MLB97529812372_112025-O-oculos-de-sol-feminino-viale-original-quadrado-luxo.webp"
  },
  {
    num: 20,
    nome: "Óculos de sol oval retrô",
    descricao: "Estilo anos 2000. Mais de 5 mil vendidos.",
    preco: "R$ 37,99",
    loja: "ml",
    categoria: "acessorios",
    link: "https://meli.la/1CsDS68",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_736082-MLB105575708394_012026-O-oculos-de-sol-feminino-oval-blogueira-retro-vintage-y2k-moda.webp"
  },
  {
    num: 21,
    nome: "Cinto de couro com fivela dourada",
    descricao: "Couro legítimo. Nota 4,9.",
    preco: "R$ 48,99",
    loja: "ml",
    categoria: "acessorios",
    link: "https://meli.la/1yhSCm6",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_881590-MLB91828466832_092025-O-cinto-feminino-couro-legitimo-fivela-dourada-moda-elegante.webp"
  },
  {
    num: 22,
    nome: "Carteira pequena com zíper",
    descricao: "Porta cartão e moedas. Nota 4,6 com mais de 5 mil vendidas.",
    preco: "R$ 19,49",
    loja: "ml",
    categoria: "acessorios",
    link: "https://meli.la/2n3SYzm",
    imagem: "https://http2.mlstatic.com/D_NQ_NP_635537-MLB111361185484_052026-O-carteira-feminina-pequena-c-ziper-porta-moedas-carto-couro.webp"
  },
  {
    num: 23,
    nome: "Chapéu bucket liso",
    descricao: "Unissex. Nota 4,6 com mais de 1 mil avaliações na Amazon.",
    preco: "R$ 39,90",
    loja: "amazon",
    categoria: "acessorios",
    link: "https://www.amazon.com.br/dp/B0BRBVV539?tag=achadinh0a062-20",
    imagem: "https://m.media-amazon.com/images/I/51-4Kt3FH8L._AC_SL500_.jpg"
  },
  {
    num: 24,
    nome: "Lenço acetinado floral",
    descricao: "Longo e leve, dá pra usar no cabelo, no pescoço ou na bolsa. Nota 4,7 na Amazon.",
    preco: "R$ 65,14",
    loja: "amazon",
    categoria: "acessorios",
    link: "https://www.amazon.com.br/dp/B0BRSP1LY2?tag=achadinh0a062-20",
    imagem: "https://m.media-amazon.com/images/I/718zKg41B3L._AC_SL500_.jpg"
  }
];
