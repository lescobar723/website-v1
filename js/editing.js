var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n, y) {
  showDivs(slideIndex += n, y);
}

function showDivs(n, y) {
  var i;
  if(y == "mySlides"){
    var x = document.getElementsByClassName("mySlides");
  }
  else if(y == "mySlides1"){
    var x = document.getElementsByClassName("mySlides1");
  }
  else{
    var x = document.getElementsByClassName("mySlides2");
  }
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

function myFunction() {
  var x = document.getElementById("right");
  if (x.className === "right") {
    x.className = "responsive";
  } else {
    x.className = "right";
  }
}