// ==============================
// Script compartilhado por todas as páginas
// ==============================
document.addEventListener('DOMContentLoaded', () => {
    const nav = document.querySelector('.navBar');
    const menu = document.querySelector('.nav-links');
    const burguer = document.querySelector('.burguer');

    // ---------- Menu mobile ----------
    const fecharMenu = () => {
        menu?.classList.remove('ativo');
        burguer?.setAttribute('aria-expanded', 'false');
        if (burguer) burguer.innerHTML = '<i class="fa-solid fa-bars"></i>';
    };

    burguer?.addEventListener('click', () => {
        const aberto = menu.classList.toggle('ativo');
        burguer.setAttribute('aria-expanded', String(aberto));
        burguer.innerHTML = aberto ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
    });

    menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', fecharMenu));

    // ---------- Navbar com fundo ao rolar ----------
    const atualizarNav = () => nav?.classList.toggle('scrolled', window.scrollY > 20);
    atualizarNav();
    window.addEventListener('scroll', atualizarNav, { passive: true });

    // ---------- Link ativo conforme a seção visível ----------
    const linksAncora = [...document.querySelectorAll('.nav-links a[href^="#"]:not(.nav-cta)')];
    const secoes = linksAncora
        .map(a => document.querySelector(a.getAttribute('href')))
        .filter(Boolean);

    if (secoes.length) {
        const obsSecao = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                linksAncora.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id));
            });
        }, { rootMargin: '-45% 0px -50% 0px' });
        secoes.forEach(s => obsSecao.observe(s));
    }

    // ---------- Animação de entrada ----------
    const revelar = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });
        revelar.forEach(el => obs.observe(el));
    } else {
        revelar.forEach(el => el.classList.add('visible'));
    }

    // ---------- Texto digitando (hero) ----------
    const typed = document.getElementById('typed');
    if (typed) {
        const palavras = JSON.parse(typed.dataset.words || '[]');
        const reduzido = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (palavras.length && !reduzido) {
            let p = 0, c = palavras[0].length, apagando = true;
            const tick = () => {
                const palavra = palavras[p];
                c += apagando ? -1 : 1;
                typed.textContent = palavra.slice(0, c);
                let espera = apagando ? 45 : 90;
                if (!apagando && c === palavra.length) { apagando = true; espera = 1800; }
                else if (apagando && c === 0) { apagando = false; p = (p + 1) % palavras.length; espera = 300; }
                setTimeout(tick, espera);
            };
            setTimeout(tick, 2200);
        }
    }

    // ---------- Filtro de projetos ----------
    const filtros = document.querySelectorAll('.filter-btn');
    filtros.forEach(btn => btn.addEventListener('click', () => {
        filtros.forEach(b => b.classList.toggle('active', b === btn));
        const f = btn.dataset.filter;
        document.querySelectorAll('.project-card').forEach(card => {
            const mostrar = f === 'all' || card.dataset.cat.split(' ').includes(f);
            card.classList.toggle('hidden', !mostrar);
            if (mostrar) card.classList.add('visible');
        });
    }));

    // ---------- Ano atual no rodapé ----------
    document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());
});
