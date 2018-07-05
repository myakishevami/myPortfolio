const parallaxContainer = document.querySelector(".parallax");
const layers = Array.from(parallaxContainer.children);
const moveLayers = e => {
  const initialX = window.innerWidth / 2 - e.pageX;
  const initialY = window.innerHeight / 2 - e.pageY;

  layers.forEach((layer, i)=> {
   // const divider =  i / 100;
    const positionX = initialX * 0.01;
    const positionY = initialY * 0.01;
    const bottomPosition = (window.innerHeight / 2) * 0.01;
    const image = layer.firstElementChild;
    image.style.bottom = `-${bottomPosition}px`;
    layer.style.transform = `translate(${positionX}px, ${positionY}px)`;
  });
};

window.addEventListener("mousemove", moveLayers);

