
document.addEventListener('DOMContentLoaded', function () {
  
  document.querySelector(".blog__about__left-btn").onclick = (function (e) {
    e.preventDefault();
    
    document.querySelector(".blog__about__left").classList.toggle("blog__about__left__active");

  });

  document.querySelector(".blog__about__left-part").onclick = (function (e) {
    e.preventDefault();
    console.log("addeventlistener");
    document.querySelector(".blog__about__left").classList.remove("blog__about__left__active");
    
  });
    
  });
