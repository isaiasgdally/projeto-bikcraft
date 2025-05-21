const links = document.querySelectorAll(".header-menu a");

function ativarLink(link){
   const url = window.location.href;
   const href = link.href;
   
   if(url.includes(href)){
      link.classList.add("ativo");
   }
}

links.forEach(ativarLink);

const parametros = new URLSearchParams (location.search);

function ativarProduto(parametro){   
const elemento = document.getElementById(parametro);

   if(elemento){
      elemento.checked = true;
   }
}

parametros.forEach(ativarProduto);


const perguntas = document.querySelectorAll(".perguntas button");

function ativarPergunta(event){
   const pergunta = event.currentTarget;
   const controls = pergunta.getAttribute("aria-controls");
   const resposta = document.getElementById(controls);

   const ativo = resposta.classList.toggle("ativa");
}

function eventosPerguntas(pergunta){
   pergunta.addEventListener("click", ativarPergunta);
}

perguntas.forEach(eventosPerguntas);


const galeria = document.querySelectorAll(".bicicleta-imagens img");
const galeriaContainer = document.querySelector(".bicicleta-imagens");

function trocarImagem(event){
   const img = event.currentTarget;
   const media = matchMedia('(min-width: 1000px)').matches;
   galeriaContainer.prepend(img);
}

function eventosGaleria(img){
   addEventListener("click", trocarImagem)
}

galeria.forEach()

