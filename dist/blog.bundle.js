webpackJsonp([3],{17:function(e,t,o){"use strict";o(18)},18:function(e,t,o){"use strict";document.addEventListener("DOMContentLoaded",function(){document.querySelector(".blog__about__left-btn").onclick=function(e){e.preventDefault(),document.querySelector(".blog__about__left").classList.toggle("blog__about__left__active")};for(var e=document.querySelectorAll(".blog__about__left-part"),t=(document.querySelectorAll(".blog__about__right-elem"),0);t<e.length;t++)e[t].onclick=function(e){e.preventDefault(),document.querySelector(".blog__about__left").classList.remove("blog__about__left__active")};window.onscroll=function(){var e=window.pageYOffset||document.documentElement.scrollTop;console.log(e)}})}},[17]);