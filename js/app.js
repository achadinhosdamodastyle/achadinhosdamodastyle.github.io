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
        /(^|\.)(amazon\.com\.br|amzn\.to|mercadolivre\.com\.br|mercadolivre\.com|meli\.la)$/.test(u.hostname);
    } catch (e) { return false; }
  }

  function el(tag, cls, texto) {
    const e = document.createElement(tag);
    if (cls) e.className = cls;
    if (texto) e.textContent = texto;
    return e;
  }

  function card(p) {
    const c = el('article', 'card');
    const img = el('div', 'card-img');
    if (p.imagem) {
      const i = document.createElement('img');
      i.src = p.imagem; i.alt = p.nome; i.loading = 'lazy';
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
    lista.slice().reverse().forEach(p => grade.appendChild(card(p)));
  }

  filtros.forEach(b => b.addEventListener('click', () => {
    filtros.forEach(x => x.setAttribute('aria-pressed', 'false'));
    b.setAttribute('aria-pressed', 'true');
    render(b.dataset.cat);
  }));

  render('todos');
})();
