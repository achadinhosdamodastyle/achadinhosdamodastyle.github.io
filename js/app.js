// Renderiza a vitrine a partir de js/produtos.js (sem bibliotecas externas, sem innerHTML com dados)
(function () {
  const grade = document.getElementById('grade');
  if (!grade) return;
  const filtros = document.querySelectorAll('.filtro');
  const busca = document.getElementById('busca');
  const status = document.getElementById('status-busca');
  const NOMES_LOJA = { ml: 'Mercado Livre', amazon: 'Amazon' };
  const SVG = 'http://www.w3.org/2000/svg';

  // Aceita só links http(s) das lojas oficiais — evita link quebrado ou colado errado
  function linkValido(url) {
    try {
      const u = new URL(url);
      return u.protocol === 'https:' &&
        /(^|\.)(amazon\.com\.br|amzn\.to|link\.amazon|mercadolivre\.com\.br|mercadolivre\.com|meli\.la)$/.test(u.hostname);
    } catch (e) { return false; }
  }

  // Só aceita foto servida pelos servidores oficiais das lojas (https)
  function imagemValida(url) {
    try {
      const u = new URL(url);
      return u.protocol === 'https:' && /(^|\.)(mlstatic\.com|media-amazon\.com|ssl-images-amazon\.com)$/.test(u.hostname);
    } catch (e) { return false; }
  }

  function el(tag, cls, texto) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (texto) e.textContent = texto;
    return e;
  }

  function estrela() {
    const s = document.createElementNS(SVG, 'svg');
    s.setAttribute('viewBox', '0 0 24 24');
    s.setAttribute('aria-hidden', 'true');
    const p = document.createElementNS(SVG, 'path');
    p.setAttribute('fill', 'currentColor');
    p.setAttribute('d', 'm12 2.5 2.9 6 6.6.8-4.9 4.5 1.3 6.5L12 17.1l-5.9 3.2 1.3-6.5L2.5 9.3l6.6-.8z');
    s.appendChild(p);
    return s;
  }

  function foto(p, alvo) {
    if (imagemValida(p.imagem)) {
      const i = document.createElement('img');
      i.src = p.imagem; i.alt = p.nome; i.loading = 'lazy'; i.decoding = 'async';
      i.referrerPolicy = 'no-referrer';
      // Se a loja trocar/remover a foto, mostra o placeholder no lugar da imagem quebrada
      i.onerror = function () { i.remove(); alvo.appendChild(el('span', 'ph', 'A')); };
      alvo.appendChild(i);
    } else {
      alvo.appendChild(el('span', 'ph', 'A'));
    }
  }

  function card(p) {
    const c = el('article', 'card');
    if (Number.isInteger(p.num)) c.id = 'p' + p.num;
    const img = el('div', 'card-img');
    if (Number.isInteger(p.num)) img.appendChild(el('span', 'num', 'nº ' + p.num));
    if (p.destaque) img.appendChild(el('span', 'fita', 'Do vídeo'));
    foto(p, img);
    c.appendChild(img);

    const corpo = el('div', 'card-corpo');
    corpo.appendChild(el('span', 'selo ' + p.loja, NOMES_LOJA[p.loja] || p.loja));
    corpo.appendChild(el('h3', null, p.nome));
    if (p.descricao) {
      const d = el('p');
      if (/^Nota\s/.test(p.descricao)) d.appendChild(estrela());
      d.appendChild(document.createTextNode(p.descricao));
      corpo.appendChild(d);
    }
    if (p.preco) {
      const pr = el('div', 'preco', p.preco);
      pr.appendChild(el('small', null, 'preço pode mudar'));
      corpo.appendChild(pr);
    }
    const a = el('a', 'btn', 'Ver na ' + (p.loja === 'amazon' ? 'Amazon' : 'loja'));
    a.href = p.link;
    a.target = '_blank';
    a.rel = 'sponsored noopener';
    a.setAttribute('aria-label', 'Ver ' + p.nome + ' em ' + (NOMES_LOJA[p.loja] || 'loja') + ' (abre em nova aba)');
    corpo.appendChild(a);
    c.appendChild(corpo);
    return c;
  }

  const TODOS = (typeof PRODUTOS !== 'undefined' ? PRODUTOS : []).filter(p => linkValido(p.link));
  const ordenados = TODOS.slice().sort((a, b) => (b.destaque ? 1 : 0) - (a.destaque ? 1 : 0) || (b.num || 0) - (a.num || 0));
  let categoria = 'todos';

  // Tira acento e caixa pra busca achar "calca" = "Calça"
  const norm = t => String(t || '').normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().trim();

  function filtrar() {
    const bruto = busca ? norm(busca.value) : '';
    const numero = /^(n[ºo°.]?\s*|#\s*|p)?(\d{1,3})$/.exec(bruto);
    if (numero) return ordenados.filter(p => p.num === Number(numero[2]));
    return ordenados.filter(p =>
      (categoria === 'todos' || p.categoria === categoria) &&
      (!bruto || norm(p.nome + ' ' + (NOMES_LOJA[p.loja] || '')).includes(bruto)));
  }

  function render() {
    grade.textContent = '';
    const lista = filtrar();
    if (status) status.textContent = lista.length + (lista.length === 1 ? ' achado encontrado' : ' achados encontrados');
    if (!lista.length) {
      const v = el('div', 'vazio');
      if (busca && busca.value.trim()) {
        v.appendChild(el('strong', null, 'Nenhum achado com "' + busca.value.trim() + '"'));
        v.appendChild(document.createTextNode('Confira o número que aparece no vídeo ou tente outra palavra.'));
      } else {
        v.appendChild(el('strong', null, 'Os primeiros achadinhos chegam em breve'));
        v.appendChild(document.createTextNode('Enquanto isso, acompanhe os vídeos no Instagram e no TikTok.'));
      }
      grade.appendChild(v);
      return;
    }
    lista.forEach(p => grade.appendChild(card(p)));
  }

  function marcarFiltro(cat) {
    categoria = cat;
    filtros.forEach(x => x.setAttribute('aria-pressed', x.dataset.cat === cat ? 'true' : 'false'));
  }

  // Quantidade de achados em cada categoria, dentro do botão
  filtros.forEach(b => {
    const n = b.dataset.cat === 'todos' ? TODOS.length : TODOS.filter(p => p.categoria === b.dataset.cat).length;
    b.appendChild(el('span', 'qtd', String(n)));
    b.addEventListener('click', () => {
      marcarFiltro(b.dataset.cat);
      if (busca) busca.value = '';
      render();
    });
  });

  if (busca) {
    busca.addEventListener('input', () => {
      if (busca.value.trim()) marcarFiltro('todos');
      render();
    });
  }

  const total = document.getElementById('total-achados');
  if (total) total.textContent = String(TODOS.length);

  // Colagem do topo: o produto do vídeo + os mais novos de outras categorias
  const colagem = document.getElementById('colagem');
  if (colagem) {
    const escolhidos = [];
    const cats = new Set();
    ordenados.forEach(p => {
      if (escolhidos.length < 3 && imagemValida(p.imagem) && !cats.has(p.categoria)) {
        escolhidos.push(p); cats.add(p.categoria);
      }
    });
    escolhidos.forEach((p, i) => {
      const a = document.createElement('a');
      a.href = '#p' + p.num;
      a.setAttribute('aria-label', 'nº ' + p.num + ': ' + p.nome);
      foto(p, a);
      a.appendChild(el('span', 'tag', i === 0 ? 'nº ' + p.num + ' · ' + p.preco : 'nº ' + p.num));
      colagem.appendChild(a);
    });
  }

  // Link direto pro produto: achadinhosdamodastyle.github.io/#p7 rola até o nº 7 e destaca
  function irParaProduto() {
    const m = /^#p(\d{1,3})$/.exec(location.hash);
    if (!m) return;
    if (!document.getElementById('p' + m[1])) {
      if (busca) busca.value = '';
      marcarFiltro('todos');
      render();
    }
    const alvo = document.getElementById('p' + m[1]);
    if (!alvo) return;
    document.querySelectorAll('.card.alvo').forEach(x => x.classList.remove('alvo'));
    alvo.classList.add('alvo');
    alvo.scrollIntoView({ block: 'center' });
  }
  window.addEventListener('hashchange', irParaProduto);

  render();
  irParaProduto();
})();
