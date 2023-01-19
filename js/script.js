new Vivus('bg_home', {

    duration: 600
   
});

function faq() {

    const pergunta = document.querySelectorAll(".faq");
    const resposta = document.querySelectorAll(".faq_text");

    for (let i = 0; i < pergunta.length; i++) {

        pergunta[i].addEventListener("click", () => {


            if (pergunta[i].classList.contains('fechar')) {
                pergunta[i].classList.toggle('fechar');
                resposta[i].classList.toggle('ativar');
            } else {
                pergunta[i].classList.add('fechar');
                resposta[i].classList.add('ativar');
            }

        });

    }

}

window.addEventListener('load', faq());

const animations = document.querySelectorAll("[data-animation]");
const animationClass = "animate";

function animation_scroll() {
  const area_window = window.innerHeight * 0.21 * 3.8;

  animations.forEach((element) => {
    let posicaoAtual = element.getBoundingClientRect().top;

    if (area_window > posicaoAtual) {
      element.classList.add(animationClass);
    } else {
      element.classList.remove(animationClass);
    }
  });
}

if (animations.length) {
  window.addEventListener("scroll", animation_scroll);
}