// ==============================
// Dados das habilidades
// ==============================
const habilidadesData = {
    dev: [
        { icone: 'fab fa-html5', titulo: 'HTML5', descricao: 'Estruturação semântica de páginas web', categoria: 'dev-web' },
        { icone: 'fab fa-css3-alt', titulo: 'CSS3', descricao: 'Estilização e design responsivo', categoria: 'dev-web' },
        { icone: 'fab fa-js-square', titulo: 'JavaScript', descricao: 'Interatividade e lógica de programação', categoria: 'dev-web' },
        { icone: 'fab fa-php', titulo: 'PHP', descricao: 'Desenvolvimento back-end e APIs', categoria: 'dev-web' },
        { icone: 'fas fa-database', titulo: 'MySQL', descricao: 'Banco de dados relacional', categoria: 'banco-dados' },
        { icone: 'fas fa-server', titulo: 'SQL', descricao: 'Linguagem de consulta estruturada', categoria: 'banco-dados' },
        { icone: 'fab fa-java', titulo: 'JAVA', descricao: 'Desenvolvimento orientado a objetos', categoria: 'linguagens' },
        { icone: 'fas fa-code', titulo: 'JAM', descricao: 'Stack JavaScript, APIs e Markup', categoria: 'dev-web' },
        { icone: 'fas fa-robot', titulo: 'Robot', descricao: 'Automação de processos', categoria: 'dev-web' }
    ],
    ferramentas: [
        { icone: 'fas fa-code', titulo: 'Visual Studio', descricao: 'IDE para desenvolvimento', categoria: 'ferramentas' },
        { icone: 'fas fa-edit', titulo: 'Sublime Text', descricao: 'Editor de texto avançado', categoria: 'ferramentas' },
        { icone: 'fas fa-database', titulo: 'Workbench', descricao: 'Gerenciamento de banco MySQL', categoria: 'ferramentas' },
        { icone: 'fas fa-server', titulo: 'SQL Server Management', descricao: 'Gerenciamento SQL Server', categoria: 'ferramentas' },
        { icone: 'fas fa-window-maximize', titulo: 'NetBeans', descricao: 'IDE para desenvolvimento Java', categoria: 'ferramentas' },
        { icone: 'fas fa-gamepad', titulo: 'Construct 2', descricao: 'Desenvolvimento de jogos', categoria: 'ferramentas' },
        { icone: 'fas fa-search', titulo: 'Elastic Search', descricao: 'Motor de busca e análise', categoria: 'ferramentas' }
    ]
};

// ==============================
// Classe Carrossel
// ==============================
class Carrossel {
    constructor(categoria, data) {
        this.categoria = categoria;
        this.data = data;
        this.currentIndex = 0;
        this.itemsPerView = this.calcularItemsPorView();
        this.carrosselEl = document.getElementById(`carrossel-${categoria}`);
        this.indicadoresEl = document.getElementById(`indicadores-${categoria}`);
        this.isAnimating = false;
        this.init();
    }

    init() {
        this.criarItens();
        this.criarIndicadores();
        this.atualizar();
        window.addEventListener('resize', () => {
            this.itemsPerView = this.calcularItemsPorView();
            this.criarIndicadores();
            this.atualizar();
        });
    }

    calcularItemsPorView() {
        if (window.innerWidth < 768) return 1;
        if (window.innerWidth < 1024) return 2;
        return 3;
    }

    criarItens() {
        this.carrosselEl.innerHTML = '';
        this.data.forEach(item => {
            const div = document.createElement('div');
            div.className = `carrossel-item ${item.categoria}`;
            div.innerHTML = `
                <i class="${item.icone} carrossel-icone"></i>
                <h3 class="carrossel-titulo">${item.titulo}</h3>
                <p class="carrossel-descricao">${item.descricao}</p>
            `;
            this.carrosselEl.appendChild(div);
        });
    }

    criarIndicadores() {
        this.indicadoresEl.innerHTML = '';
        const totalSlides = Math.ceil(this.data.length / this.itemsPerView);
        for (let i = 0; i < totalSlides; i++) {
            const div = document.createElement('div');
            div.className = `indicador ${i === 0 ? 'ativo' : ''}`;
            div.addEventListener('click', () => this.pularParaSlide(i));
            this.indicadoresEl.appendChild(div);
        }
    }

    atualizar() {
        const translateX = -this.currentIndex * (100 / this.itemsPerView);
        this.carrosselEl.style.transform = `translateX(${translateX}%)`;

        // Atualiza indicadores
        const totalSlides = Math.ceil(this.data.length / this.itemsPerView);
        const indicadores = this.indicadoresEl.querySelectorAll('.indicador');
        indicadores.forEach((ind, index) => {
            ind.classList.toggle('ativo', index === this.currentIndex % totalSlides);
        });
    }

    mover(direction) {
        if (this.isAnimating) return;
        this.isAnimating = true;

        const totalSlides = Math.ceil(this.data.length / this.itemsPerView);
        this.currentIndex = (this.currentIndex + direction + totalSlides) % totalSlides;
        this.atualizar();

        setTimeout(() => this.isAnimating = false, 300);
    }

    pularParaSlide(index) {
        this.currentIndex = index;
        this.atualizar();
    }
}

// ==============================
// Inicializar todos os carrosséis
// ==============================
const carrosseis = [];

document.addEventListener('DOMContentLoaded', () => {
    Object.keys(habilidadesData).forEach(categoria => {
        carrosseis.push(new Carrossel(categoria, habilidadesData[categoria]));
    });

    // Auto-rotate para todos os carrosséis
    setInterval(() => {
        carrosseis.forEach(c => {
            if (c.categoria === 'ferramentas') {
                c.mover(-1); // gira para trás
            } else {
            }
        });
    }, 3000);

        setInterval(() => {
        carrosseis.forEach(c => {
            if (c.categoria === 'ferramentas') {
                
            } else {
                c.mover(1);  // gira normalmente
            }
        });
    }, 4000);
});
