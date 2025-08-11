// ==============================
// Scroll Suave para Seções Âncora
// ==============================
const menulink = document.querySelectorAll('.inicio a[href^="#"]');

// Retorna a distância do topo do elemento-alvo
function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
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
  const distanceFromTheTop = getDistanceFromTheTop(event.target) - 170;
  nativeScroll(distanceFromTheTop);
}

// Aplica o evento a todos os links com âncoras
menulink.forEach((link) => {
  link.addEventListener("click", scrollToSection);
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
function atualizarIdade() {
  const anoNascimento = 1997;
  const anoAtual = new Date().getFullYear();
  const idade = anoAtual - anoNascimento;

  // Armazena no localStorage
  localStorage.setItem('idade', idade);

  // Atualiza na tela se existir o span com id="idade"
  const spanIdade = document.getElementById('idade');
  if (spanIdade) {
    spanIdade.textContent = idade;
  }
}

atualizarIdade();

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