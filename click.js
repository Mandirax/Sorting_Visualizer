var islideIndex = 1;
var bslideIndex=1;
var sslideIndex=1;
ishowSlides(islideIndex);

// Next/previous controls
function iplusSlides(n) {
  ishowSlides(islideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  ishowSlides(islideIndex = n);
}

function ishowSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  //var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {islideIndex = 1}
  if (n < 1) {islideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  //for (i = 0; i < dots.length; i++) {
   //   dots[i].className = dots[i].className.replace(" active", "");
  //}
  slides[islideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += " active";
}
function openinfoi() {

  document.getElementById("popi").style.display = "block";

}
//---------------------------------------------------------------
bshowSlides(bslideIndex);

function bplusSlides(n) {
  bshowSlides(bslideIndex += n);
}
function currentSlide(n) {
  bshowSlides(bslideIndex = n);
}



function bshowSlides(n) {
  var i;
  var slides = document.getElementsByClassName("bmySlides");
  //var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {bslideIndex = 1}
  if (n < 1) {bslideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  //for (i = 0; i < dots.length; i++) {
   //   dots[i].className = dots[i].className.replace(" active", "");
  //}
  slides[bslideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += " active";
}
function openinfob() {

  document.getElementById("popb").style.display = "block";

}
 

//-------------------------------------------------------------------------------------

sshowSlides(sslideIndex);

function splusSlides(n) {
  sshowSlides(sslideIndex += n);
}
function currentSlide(n) {
  sshowSlides(sslideIndex = n);
}



function sshowSlides(n) {
  var i;
  var slides = document.getElementsByClassName("smySlides");
  //var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {sslideIndex = 1}
  if (n < 1) {sslideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  //for (i = 0; i < dots.length; i++) {
   //   dots[i].className = dots[i].className.replace(" active", "");
  //}
  slides[sslideIndex-1].style.display = "block";
  //dots[slideIndex-1].className += " active";
}
function openinfos() {

  document.getElementById("pops").style.display = "block";

}
  