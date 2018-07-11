import Vue from "vue";

const compA = {
  template: "#compA"
};

const compB = {
  template: "#compB"
};

new Vue({
  el: "#animation-root",
  components: {
    compA,
    compB
  },
  data: {
    compToShow: "compA"
  },
  methods: {
    switchComponents() {
      this.compToShow = this.compToShow === "compA" ? "compB" : "compA";
    
    }
  },
  template: "#animation"
});

document.querySelector(".hero__btn").onclick = (function (e) {
  e.preventDefault();
  document.querySelector(".wellcome__section-title-main").classList.remove("wellcome__section-non-active");
  document.querySelector(".wellcome__section-title-main").classList.add("wellcome__section-non-active");
});
