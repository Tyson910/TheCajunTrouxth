var myTimer;
let i = 0;

const imgArray = [
  {
    file:'pic_1.jpg',
    alt:'picture 1 of food'
  },
  {
    file:'pic_2.jpg',
    alt:'picture 2 of food'
  },
  {
    file:'pic_3.jpg',
    alt:'picture 3 of food'
  },
  {
    file:'pic_4.jpg',
    alt:'picture 4 of food'
  }
]

function change_i(){
  clearInterval(myTimer);
  if( i === imgArray.length-1 ){
    i = 0;
  }
  else{
    i = i + 1;
  }
 changeDisplay(i);
}

function changeDisplay(n){
  let currentDisplay = imgArray[n];
  document.getElementById('carousel-pic').src = currentDisplay.file;
  document.getElementById('carousel-pic').alt = currentDisplay.alt;
  document.getElementById('caption').innerHTML = currentDisplay.alt;
}

function currentSlide(n){
  clearInterval(myTimer);
  i= n;
  changeDisplay(n);
  myTimer = setInterval( ()=> change_i(), 4000);
}

const pause = () => {
  clearInterval(myTimer);
}

const resume = () =>{
  clearInterval(myTimer);
  myTimer = setInterval(()=> change_i(), 4000);
}

window.addEventListener("load",function() {
  currentSlide(i);
  myTimer = setInterval(()=> change_i(), 4000);


  //UNCOMMENT OUT THE LINE BELOW TO KEEP ARROWS PART OF MOUSEENTER PAUSE/RESUME
  let slideshowContainer = document.getElementsByClassName('slideshow-container')[0];

  slideshowContainer.addEventListener('mouseenter', pause)
  slideshowContainer.addEventListener('mouseleave', resume)
})
