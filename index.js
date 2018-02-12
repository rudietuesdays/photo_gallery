(function(window, document, undefined){

  window.onload = init;

  function init(){

    var slides = document.getElementsByClassName("Carousel-image");
    var caption = document.getElementsByClassName("Carousel-caption");
    var counter = document.getElementById("Carousel-counter");
    var prevButton = document.getElementById("Button-prev");
    var nextButton = document.getElementById("Button-next");

    var slideIndex = 1;
    showSlides(slideIndex);

    // de-increment slides minus 1
    function prevSlide(n) {
      showSlides(slideIndex -= 1);
    }

    // increment slide plus 1
    function advanceSlide(n) {
      showSlides(slideIndex += 1);
    }

    function showSlides(n) {
      // Disable previous button if at first slide
      if (n === 1) {
        prevButton.disabled = true;
      }
      // otherwise, keep prev button enabled
      else {
        prevButton.disabled = false;
      }

      // disable next button if at last slide
      if (n === slides.length) {
        nextButton.disabled = true;
      }
      // otherwise, keep next button enabled
      else {
        nextButton.disabled = false;
      }

      for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        caption[i].style.display = "none";
      }

      slides[slideIndex-1].style.display = "block";
      caption[slideIndex-1].style.display = "block";

    }

    prevButton.onclick = function() {
      // console.log('clicked prev');
      prevSlide(slideIndex);
      console.log('slide index ' + slideIndex);
      counter.innerHTML = slideIndex + " / 10"
    }

    nextButton.onclick = function() {
      // console.log('clicked next');
      advanceSlide(slideIndex);
      console.log('slide index ' + slideIndex);
      counter.innerHTML = slideIndex + " / 10"
    }

  }

})(window, document, undefined)
