
document.addEventListener('DOMContentLoaded', function () {
  
  document.querySelector(".blog__about__left-btn").onclick = (function (e) {
    e.preventDefault();
    
    document.querySelector(".blog__about__left").classList.toggle("blog__about__left__active");

  });

  var elems__left = document.querySelectorAll(".blog__about__left-part");
  var elems__right = document.querySelectorAll(".blog__about__right-elem");

  for (var i=0; i<elems__left.length; i++)
  { elems__left[i].onclick = (function (e) {
    e.preventDefault();
    
    document.querySelector(".blog__about__left").classList.remove("blog__about__left__active");
    //document.querySelector(elems__right[i]).classList.add("active");
  });


  
    //elems__right[i].classList.add("blog__about__right-elem-active");
  
}
window.onscroll = function() {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  console.log(scrolled);
  //document.getElementById('showScroll').innerHTML = scrolled + 'px';
} 


  });
