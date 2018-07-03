

const parallaxContainer = document.querySelector('.parallax');
const layers = parallaxContainer.children;

const moveLayers = e => {
  console.log(e);
}

window.addEventListener('mousemove', moveLayers);

