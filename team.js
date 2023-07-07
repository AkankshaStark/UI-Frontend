function showSlides(n) 
{
  let i;
  let slides = document.getElementsByClassName("carousel-item fade");
  let dots = document.getElementsByClassName("base");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[n].style.display = "block"; 
  dots[n].className += " active";
}
