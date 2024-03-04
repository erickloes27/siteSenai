// Get references to the elements
const stars = document.getElementById('stars');
const moon = document.getElementById('moon');
const mountains_behind = document.getElementById('mountains_behind');
const text = document.getElementById('text');
const btn = document.getElementById('btn');
const mountains_front = document.getElementById('mountains_front');
const header = document.getElementById('topo');

// Adiciona o evento scrool a pagina
window.addEventListener('scroll', function() {
  let value = window.scrollY;
  
  // Atualiza os elementos com base na posição atual da página
  stars.style.left = value * 0.25 + 'px';
  moon.style.top = value * 1.05 + 'px';
  mountains_behind.style.top = value * 0.5 + 'px';
  mountains_front.style.top = value * 0 + 'px';
  text.style.marginTop = value * 1.7 + 'px';
  btn.style.marginTop = value * 1.6 + 'px';
  
});

//Funções da header para o translate y
function inicio() {
  window.scrollY = 500
}

//Códiogs para passar slides 
    
//slider
const slides1 = document.querySelectorAll('.slide');
const prev1 = document.querySelector('.prev1');
const next1 = document.querySelector('.next1');

i = 0;

function ActiveSlide(n){
  for(slide of slides1)
  slide.classList.remove('active');
  slides1[n].classList.add('active');
}

// function for next btn
next1.addEventListener('click', function(){
  if(i == slides1.length - 1){
    i = 0;
    ActiveSlide(i);
  }
  else 
  {
    i++;
    ActiveSlide(i);
  }
})

 // function for prev btn
 prev1.addEventListener('click', function(){
  if(i == 0){
    i = slides1.length - 1;
    ActiveSlide(i);
  }
  else 
  {
    i--;
    ActiveSlide(i);
  }
})