// ==============================
// Scroll Suave para Seções Âncoras
// ==============================
document.addEventListener('DOMContentLoaded', () => {

    const menulink = document.querySelectorAll('.inicio a[href^="#"]'); // Definido uma vez

    // Retorna a distância do topo do elemento-alvo
    function getDistanceFromTheTop(element) {
        const id = element.getAttribute("href");
        const targetElement = document.querySelector(id);

        if (targetElement) {
            const offsetTop = targetElement.offsetTop;
            const headerHeight = document.querySelector("header") ? document.querySelector("header").offsetHeight : 0;
            return offsetTop - headerHeight;
        }
        return 0;
    }

    // Rola a página suavemente até a posição indicada
    function nativeScroll(distance) {
        window.scroll({
            top: distance,
            behavior: "smooth",
        });
    }

    // Evento de clique nos links de navegação
    function scrollToSection(event) {
        event.preventDefault();
        const distanceFromTheTop = getDistanceFromTheTop(event.target);
        nativeScroll(distanceFromTheTop);
    }

    // Aplica o evento a todos os links com âncoras
    menulink.forEach((link) => {
        link.addEventListener("click", scrollToSection);
    });

    // ==============================
    // Saudação conforme horário atual
    // ==============================
    function atualizarSaudacao() {
        const hora = new Date().getHours();
        let saudacao = '';

        if (hora >= 5 && hora < 12) {
            saudacao = 'Bom dia! 🌅';
        } else if (hora >= 12 && hora < 18) {
            saudacao = 'Boa tarde! ☀️';
        } else {
            saudacao = 'Boa noite! 🌙';
        }

        const saudacaoStorage = localStorage.getItem('mensagem');
        if (saudacaoStorage) {
            saudacao = saudacaoStorage;
        }

        // Efeito de digitação
        typeWriter(saudacao, 0);
    }

    function typeWriter(text, i) {
        const saudacaoElemento = document.getElementById('saudacaoTexto'); // Garantindo que o elemento existe
        if (saudacaoElemento && i < text.length) {
            saudacaoElemento.textContent = text.substring(0, i + 1);
            setTimeout(() => typeWriter(text, i + 1), 50);
        }
    }

    // Atualiza a saudação a cada minuto
    setInterval(atualizarSaudacao, 60000);
    atualizarSaudacao();

    // ==============================
    // Cálculo dinâmico da idade
    // ==============================
    function calcularIdade() {
        const nascimento = new Date('1997-04-29');
        const hoje = new Date();
        let idade = hoje.getFullYear() - nascimento.getFullYear();
        const mes = hoje.getMonth() - nascimento.getMonth();

        if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
            idade--;
        }

        const spanIdade = document.getElementById('idade');
        if (spanIdade) {
            spanIdade.textContent = idade;
        } else {
            console.error("Elemento com id 'idade' não encontrado.");
        }
    }

    calcularIdade();
});

// ==============================
// Saudação conforme horário atual
// ==============================
horaSaudacao();

function horaSaudacao() {
  const data = new Date();
  const hora = data.getHours();
  const min = data.getMinutes();

  let mensagem = "Boa madrugada!!!";

  if (hora >= 6 && hora < 12) {
    mensagem = "Bom dia!!!";
  } else if (hora >= 12 && hora < 18) {
    mensagem = "Boa tarde!!!";
  } else if (hora >= 18 && hora <= 23) {
    mensagem = "Boa noite!!!";
  }

  // Armazena saudação no localStorage
  window.localStorage.setItem("mensagem", mensagem);
}

// ==============================
// Abrir e Fechar Menu Mobile
// ==============================
function abrirfechar() {
  const menuMobile = document.querySelector(".inicio__mobile");
  menuMobile.classList.toggle("ativo");
}

// ==============================
// Atualizar idade automaticamente
// ==============================
document.addEventListener('DOMContentLoaded', function() {
    // Atualizar idade automaticamente
    function atualizarIdade() {
        const anoNascimento = 1997;
        const anoAtual = new Date().getFullYear();
        const idade = anoAtual - anoNascimento;

        // Armazena no localStorage
        localStorage.setItem('idade', idade);

        // Verifica se o elemento com o id 'idade' existe antes de alterar
        const spanIdade = document.getElementById('idade');
        if (spanIdade) {
            spanIdade.textContent = idade;
        } else {
            console.error("Elemento com id 'idade' não encontrado.");
        }
    }

    // Atualizar saudação
    function atualizarSaudacao() {
        const hora = new Date().getHours();
        let saudacao = '';

        if (hora >= 5 && hora < 12) {
            saudacao = 'Bom dia! 🌅';
        } else if (hora >= 12 && hora < 18) {
            saudacao = 'Boa tarde! ☀️';
        } else {
            saudacao = 'Boa noite! 🌙';
        }

        // Verifica se o elemento com o id 'saudacaoTexto' existe
        const saudacaoElemento = document.getElementById('saudacaoTexto');
        if (saudacaoElemento) {
            saudacaoElemento.textContent = saudacao;
        } else {
            console.error("Elemento com id 'saudacaoTexto' não encontrado.");
        }

        // Efeito de digitação
        typeWriter(saudacao, 0);
    }

    // Função de digitação
    function typeWriter(text, i) {
        const saudacaoElemento = document.getElementById('saudacaoTexto');
        if (saudacaoElemento && i < text.length) {
            saudacaoElemento.textContent = text.substring(0, i + 1);
            setTimeout(() => typeWriter(text, i + 1), 50);
        }
    }

    // Atualiza a saudação a cada minuto
    setInterval(atualizarSaudacao, 60000);
    atualizarSaudacao();

    // Chama a função para atualizar a idade
    atualizarIdade();
});

// ==============================
// Redirecionamentos para projetos
// ==============================
function redirecionar1() {
  window.open("https://nicolasstudio.github.io/GeradorDeDados/");
}

function redirecionar2() {
  window.open("https://nicolasstudio.github.io/Pizzaria/");
}

function redirecionar3() {
  window.open("https://nicolasstudio.github.io/Nivaldo-Construcao/");
}

function redirecionar4() {
  window.open("https://nicolasstudio.github.io/Ficha-de-RPG/");
}

function redirecionar5() {
  window.open("https://github.com/NicolasStudio/Calculadora");
}

function redirecionar6() {
  window.open("https://nicolasstudio.github.io/Batalha-Naval/");
}

function redirecionar7() {
  window.open("https://github.com/NicolasStudio/Livraria?tab=readme-ov-file");
}

function redirecionar8() {
  window.open("https://nicolasstudio.github.io/Zer0Kcalc/");
}

// ==============================
// Cálculo dinâmico da idade
// ==============================
function calcularIdade() {
    const nascimento = new Date('1997-04-29'); // Substitua pela sua data de nascimento
    const hoje = new Date();
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
        idade--;
    }
    
    // Verifique se o elemento existe antes de definir o texto
    const spanIdade = document.getElementById('idade');
    if (spanIdade) {
        spanIdade.textContent = idade;
    } else {
        console.error("Elemento com id 'idade' não encontrado.");
    }
}

// Saudação dinâmica
function atualizarSaudacao() {
    const hora = new Date().getHours();
    let saudacao = '';
    
    if (hora >= 5 && hora < 12) {
        saudacao = 'Bom dia! 🌅';
    } else if (hora >= 12 && hora < 18) {
        saudacao = 'Boa tarde! ☀️';
    } else {
        saudacao = 'Boa noite! 🌙';
    }
    
    // Se houver mensagem do localStorage, usa ela
    const saudacaoStorage = localStorage.getItem('mensagem');
    if (saudacaoStorage) {
        saudacao = saudacaoStorage;
    }
    
    // Efeito de digitação
    typeWriter(saudacao, 0);
}

// Efeito máquina de escrever
function typeWriter(text, i) {
    if (i < text.length) {
        document.getElementById('saudacaoTexto').textContent = text.substring(0, i + 1);
        setTimeout(() => typeWriter(text, i + 1), 50);
    }
}

// Animar barras de progresso
function animarBarrasProgresso() {
    document.querySelectorAll('.progresso-interno').forEach(barra => {
        const progresso = barra.getAttribute('data-progress');
        setTimeout(() => {
            barra.style.width = progresso + '%';
        }, 500);
    });
}

// Observador de elementos para animações
function observarElementos() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.textsobre, .boxFormacao, .boxComplementares').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Inicializar tudo quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    calcularIdade();
    atualizarSaudacao();
    animarBarrasProgresso();
    observarElementos();
    
    // Atualizar a saudação a cada minuto
    setInterval(atualizarSaudacao, 60000);
});

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

// Estado dos carrosséis
const carrosselState = {
    dev: { currentIndex: 0, itemsPerView: calcularItemsPorView() },
    ferramentas: { currentIndex: 0, itemsPerView: calcularItemsPorView() }
};

// Inicializar carrosséis
function inicializarCarrosseis() {
    Object.keys(habilidadesData).forEach(categoria => {
        const carrossel = document.getElementById(`carrossel-${categoria}`);
        const indicadores = document.getElementById(`indicadores-${categoria}`);
        
        if (carrossel && indicadores) {
            // Criar itens do carrossel
            habilidadesData[categoria].forEach(item => {
                const carrosselItem = document.createElement('div');
                carrosselItem.className = `carrossel-item ${item.categoria}`;
                carrosselItem.innerHTML = `
                    <i class="${item.icone} carrossel-icone"></i>
                    <h3 class="carrossel-titulo">${item.titulo}</h3>
                    <p class="carrossel-descricao">${item.descricao}</p>
                `;
                carrossel.appendChild(carrosselItem);
            });

            // Criar indicadores
            const totalSlides = Math.ceil(habilidadesData[categoria].length / carrosselState[categoria].itemsPerView);
            for (let i = 0; i < totalSlides; i++) {
                const indicador = document.createElement('div');
                indicador.className = `indicador ${i === 0 ? 'ativo' : ''}`;
                indicador.onclick = () => pularParaSlide(categoria, i);
                indicadores.appendChild(indicador);
            }

            atualizarCarrossel(categoria);
        } else {
            console.error(`Carrossel ou indicadores para a categoria ${categoria} não encontrados.`);
        }
    });
}

// Mover carrossel
let isAnimating = false;

function moverCarrossel(categoria, direction) {
    if (isAnimating) return; // Evita múltiplos movimentos simultâneos
    isAnimating = true;
    
    const totalItems = habilidadesData[categoria].length;
    const totalSlides = Math.ceil(totalItems / carrosselState[categoria].itemsPerView);
    
    carrosselState[categoria].currentIndex = 
        (carrosselState[categoria].currentIndex + direction + totalSlides) % totalSlides;
    
    atualizarCarrossel(categoria);

    setTimeout(() => {
        isAnimating = false;
    }, 300); // Tempo da animação
}


// Pular para slide específico
function pularParaSlide(categoria, slideIndex) {
    const totalSlides = Math.ceil(habilidadesData[categoria].length / carrosselState[categoria].itemsPerView);
    carrosselState[categoria].currentIndex = Math.min(slideIndex, totalSlides - 1);
    atualizarCarrossel(categoria);
}

// Atualizar visualização do carrossel
function atualizarCarrossel(categoria) {
    const carrossel = document.getElementById(`carrossel-${categoria}`);
    const itemsPerView = carrosselState[categoria].itemsPerView;
    const translateX = -carrosselState[categoria].currentIndex * (100 / itemsPerView);
    
    carrossel.style.transform = `translateX(${translateX}%)`;

    // Atualizar indicadores
    const indicadores = document.querySelectorAll(`#indicadores-${categoria} .indicador`);
    indicadores.forEach((ind, index) => {
        ind.classList.toggle('ativo', index === carrosselState[categoria].currentIndex);
    });
}

// Calcular itens por view baseado na largura da tela
function calcularItemsPorView() {
    if (window.innerWidth < 768) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
}

// Atualizar responsividade
function atualizarResponsividade() {
    Object.keys(carrosselState).forEach(categoria => {
        carrosselState[categoria].itemsPerView = calcularItemsPorView();
        atualizarCarrossel(categoria);
    });
}

// Inicializar quando a página carregar
document.addEventListener('DOMContentLoaded', function () {
    inicializarCarrosseis();
    window.addEventListener('resize', atualizarResponsividade);

    // Auto-rotate para demonstração (opcional)
    setInterval(() => {
        moverCarrossel('dev', 1);
        moverCarrossel('ferramentas', 1);
    }, 5000);
});

