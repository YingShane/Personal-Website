const menu_burger = document.getElementById('menu-burger');
const mobile_nav_container = document.getElementById('mobile-nav-container');
const close_nav = document.getElementById('close-nav');

menu_burger.addEventListener('click', ()=>{
  mobile_nav_container.classList.add('open-nav');
})

close_nav.addEventListener('click', ()=>{
  mobile_nav_container.classList.remove('open-nav');
})

const play1 = document.getElementById('play1');
const pause1 = document.getElementById('pause1');
const stop1 = document.getElementById('stop1');
let audio1 = new Audio();
audio1.src = 'audios/一笑懸命.mp3';

play1.addEventListener('click', function(){
  audio1.play();
})

pause1.addEventListener('click', function(){
  audio1.pause();
})

stop1.addEventListener('click', function(){
  audio1.load();
})

const play2 = document.getElementById('play2');
const pause2 = document.getElementById('pause2');
const stop2 = document.getElementById('stop2');
let audio2 = new Audio();
audio2.src = 'audios/Comedy.mp3';

play2.addEventListener('click', function(){
  audio2.play();
})

pause2.addEventListener('click', function(){
  audio2.pause();
})

stop2.addEventListener('click', function(){
  audio2.load();
}) 

const play3 = document.getElementById('play3');
const pause3 = document.getElementById('pause3');
const stop3 = document.getElementById('stop3');
let audio3 = new Audio();
audio3.src = 'audios/Rubia.mp3';

play3.addEventListener('click', function(){
  audio3.play();
})

pause3.addEventListener('click', function(){
  audio3.pause();
})

stop3.addEventListener('click', function(){
  audio3.load();
}) 

const play4 = document.getElementById('play4');
const pause4 = document.getElementById('pause4');
const stop4 = document.getElementById('stop4');
let audio4 = new Audio();
audio4.src = 'audios/Meant to Be.mp3';

play4.addEventListener('click', function(){
  audio4.play();
})

pause3.addEventListener('click', function(){
  audio4.pause();
})

stop3.addEventListener('click', function(){
  audio4.load();
}) 

const play5 = document.getElementById('play5');
const pause5 = document.getElementById('pause5');
const stop5 = document.getElementById('stop5');
let audio5 = new Audio();
audio5.src = 'audios/Suzume.mp3';

play5.addEventListener('click', function(){
  audio5.play();
})

pause5.addEventListener('click', function(){
  audio5.pause();
})

stop5.addEventListener('click', function(){
  audio5.load();
}) 

let slidePosition = 0;
const slides = document.getElementsByClassName('music_wrapper');
const totalSlides = slides.length;

document.
  getElementById('carousel-button-next')
  .addEventListener('click', function(){
    moveToNextSlide();
  });

  document.
  getElementById('carousel-button-prev')
  .addEventListener('click', function(){
    moveToPrevSlide();
  });

function updateSlidePosition(){
  for(let slide of slides){
    slide.classList.remove('music_wrapper--visible');
    slide.classList.add('music_wrapper--hidden');
  }

  slides[slidePosition].classList.add('music_wrapper--visible');
}

function moveToNextSlide(){
  if(slidePosition == totalSlides - 1){
    slidePosition = 0;
  }
  else{
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide(){
  if(slidePosition == 0){
    slidePosition = totalSlides - 1;
  }
  else{
    slidePosition--;
  }

  updateSlidePosition();
}

const group = document.querySelectorAll('.group');
const boing = document.querySelector('.boing');

for(var i=0; i < group.length; i++){
  group[i].addEventListener("mouseover", function(event){
    event.target.classList.add('boing');
  });
  group[i].addEventListener("animationend", function(event){
    event.target.classList.remove('boing');
  });
}

const observer = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
});

const hiddenGroups = document.querySelectorAll('.group');

hiddenGroups.forEach((el)=>observer.observe(el));