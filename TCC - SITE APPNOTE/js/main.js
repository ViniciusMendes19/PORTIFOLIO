$('.section-primary-slider').slick({
infinite: true,
speed: 300,
autoplay: true,
autoplaySpeed: 3500,
});

$('.banner-slider').slick({
infinite: true,
speed: 300,
autoplay: true,
autoplaySpeed: 3500,
});

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "LEIA MAIS";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "LEIA MENOS";
    moreText.style.display = "inline";
  }
}


function myFunction2() {
  var dots = document.getElementById("dots2");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "LEIA MAIS";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "LEIA MENOS";
    moreText.style.display = "inline";
  }
}
