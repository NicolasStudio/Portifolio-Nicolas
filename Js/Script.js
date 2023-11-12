// Scroll Behavior
const menulink = document.querySelectorAll('.inicio a[href^="#"]');

function getDistanceFromTheTop(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function nativeScroll(getDistanceFromTheTop) {
  window.scroll({
    top: getDistanceFromTheTop,
    behavior: "smooth",
  });
}

function scrollToSection(event) {
  event.preventDefault();
  const distanceFromTheTop = getDistanceFromTheTop(event.target) - 170;
  nativeScroll(distanceFromTheTop);
}

menulink.forEach((link) => {
  link.addEventListener("click", scrollToSection);
});

horaSaudacao();
// Horário
function horaSaudacao() {
  var data = new Date();
  var hora = data.getHours();
  var min = data.getMinutes();
  var str_hora = hora + ":" + min;
  var texto0 = "Boa madrugada!!!";
  var texto1 = "Bom dia!!!";
  var texto2 = "Boa tarde!!!";
  var texto3 = "Boa noite!!!";

  if (hora >= 0 && min >= 0 && hora <= 5 && min <= 59) {
    window.localStorage.setItem("mensagem", texto0);
  } else if (hora >= 6 && min >= 0 && hora <= 11 && min <= 59) {
    window.localStorage.setItem("mensagem", texto1);
  } else if (hora >= 12 && min >= 0 && hora <= 17 && min <= 59) {
    window.localStorage.setItem("mensagem", texto2);
  } else if (hora >= 18 && min >= 0 && hora <= 24 && min <= 59) {
    window.localStorage.setItem("mensagem", texto3);
  }
}

const inicio = document.querySelector(".inicio");
const inicioMobile = document.querySelector(".inicio__mobile");
const button = document.querySelector(".burguer");

button.addEventListener("click", function () {
  inicioMobile.classList.toggle("active");
});

function abrirfechar(){

  var display = document.querySelector('.burguer__Link').style.display;

    if(display == 'block'){
      document.querySelector('.burguer__Link').style.display = 'none';
    
    }else{
      document.querySelector('.burguer__Link').style.display = 'block';

    }
}

function redirecionar1(){
  window.open("https://nicolasstudio.github.io/Gerador-de-senha/");
}

function redirecionar2(){
  window.open("https://nicolasstudio.github.io/Adivinhe-o-jogo/");
}

function redirecionar3(){
  window.open("https://nicolasstudio.github.io/Nivaldo-Construcao/");
}

function redirecionar4(){
  window.open("https://nicolasstudio.github.io/Ficha-de-RPG/");
}

function redirecionar5(){
  window.open("https://github.com/NicolasStudio/Calculadora");
}