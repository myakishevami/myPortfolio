console.log("не нажато");
document.addEventListener('DOMContentLoaded', function () {
  console.log("addeventlistener");
  document.getElementsByClassName("hamburger").onclick = (function (e) {
    e.preventDefault();
    console.log("нажато");
    document.getElementsByClassName("hamburger-popups").classList.add("hamburger-popups__active");
  });
  
  document.getElementsByClassName("hamburger-popups__close").onclick = (function (e) {
    e.preventDefault();
    document.getElementsByClassName("hamburger-popups").classList.remove("hamburger-popups__active");
  });

});