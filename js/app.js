// Renderiza a grade de achados a partir de js/produtos.js (sem bibliotecas externas)
(function () {
  const grade = document.getElementById('grade');
  if (!grade) return;
  const filtros = document.querySelectorAll('.filtro');
  const NOMES_LOJA = { ml: 'Mercado Livre', amazon: 'Amazon' };

  // Aceita só links http(s) das lojas oficiais — evita link quebrado ou colado errado
  function linkValido(url) {
    try {
      const u = new URL(url);
      return u.protocol === 'https:' &&
        /(^|\.)(amazon\.com\.br|amzn\.to|link\.amazon|mercadolivre\.com\.br|mercadolivre\.com|meli\.la)$/.test(u.hostname);
    } catch (e) { return false; }
  }

  function el(tag, cls, texto) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (texto) e.textContent = texto;
    return e;
  }

  // Só aceita foto servida pelos servidores oficiais das lojas (https)
  function imagemValida(url) {
    try {
      const u = new URL(url);
      return u.protocol === 'https:' && /(^|\.)(mlstatic\.com|media-amazon\.com|ssl-images-amazon\.com)$/.test(u.hostname);
    } catch (e) { return false; }
  }

  function card(p) {
    const c = el('article', 'card');
    if (Number.isInteger(p.num)) c.id = 'p' + p.num;
    const img = el('div', 'card-img');
    if (Number.isInteger(p.num)) img.appendChild(el('span', 'num', 'nº ' + p.num));
    if (imagemValida(p.imagem)) {
      const i = document.createElement('img');
      i.src = p.imagem; i.alt = p.nome; i.loading = 'lazy';
      i.referrerPolicy = 'no-referrer';
      // Se a loja trocar/remover a foto, volta pro placeholder em vez de mostrar imagem quebrada
      i.onerror = function () { i.remove(); img.appendChild(el('span', 'ph', 'A')); };
      img.appendChild(i);
    } else {
      img.appendChild(el('span', 'ph', 'A'));
    }
    c.appendChild(img);

    const corpo = el('div', 'card-corpo');
    corpo.appendChild(el('span', 'selo ' + p.loja, NOMES_LOJA[p.loja] || p.loja));
    corpo.appendChild(el('h3', null, p.nome));
    if (p.descricao) corpo.appendChild(el('p', null, p.descricao));
    if (p.preco) {
      const pr = el('div', 'preco', p.preco);
      pr.appendChild(el('small', null, 'preço pode mudar — confira na loja'));
      corpo.appendChild(pr);
    }
    const a = el('a', 'btn', 'Ver oferta');
    a.href = p.link;
    a.target = '_blank';
    a.rel = 'sponsored noopener';
    corpo.appendChild(a);
    c.appendChild(corpo);
    return c;
  }

  function render(cat) {
    grade.textContent = '';
    const lista = (typeof PRODUTOS !== 'undefined' ? PRODUTOS : [])
      .filter(p => linkValido(p.link))
      .filter(p => cat === 'todos' || p.categoria === cat);
    if (!lista.length) {
      const v = el('div', 'vazio');
      v.appendChild(el('strong', null, 'Os primeiros achadinhos chegam em breve'));
      v.appendChild(document.createTextNode('Enquanto isso, acompanhe os vídeos no Instagram e no TikTok.'));
      grade.appendChild(v);
      return;
    }
    // Produto do vídeo atual (destaque) primeiro; depois do número maior (mais novo) pro menor
    lista.slice().sort((a, b) => (b.destaque ? 1 : 0) - (a.destaque ? 1 : 0) || (b.num || 0) - (a.num || 0))
      .forEach(p => grade.appendChild(card(p)));
  }

  // Link direto pro produto: achadinhosdamodastyle.github.io/#p7 rola até o nº 7 e destaca
  function irParaProduto() {
    const m = /^#p(\d{1,3})$/.exec(location.hash);
    if (!m) return;
    const alvo = document.getElementById('p' + m[1]);
    if (!alvo) return;
    document.querySelectorAll('.card.alvo').forEach(x => x.classList.remove('alvo'));
    alvo.classList.add('alvo');
    alvo.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
  window.addEventListener('hashchange', () => {
    if (!document.getElementById('p' + location.hash.slice(2))) {
      filtros.forEach(x => x.setAttribute('aria-pressed', x.dataset.cat === 'todos' ? 'true' : 'false'));
      render('todos');
    }
    irParaProduto();
  });

  filtros.forEach(b => b.addEventListener('click', () => {
    filtros.forEach(x => x.setAttribute('aria-pressed', 'false'));
    b.setAttribute('aria-pressed', 'true');
    render(b.dataset.cat);
  }));

  render('todos');
  irParaProduto();
})();
