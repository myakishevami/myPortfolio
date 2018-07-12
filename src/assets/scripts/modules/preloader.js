var images = document.images;
var allImages = images.length;
var imagesLoadedCount = 0;
var preloader = document.querySelector(".preloader");
var percDisplay = document.getElementById("percent_load");
console.log("просто внутри скрипта");
for (var i = 0; i < allImages; i++) {
  var imageClone = new Image();
  imageClone.onload = imageLoaded;
  imageClone.onerror = imageLoaded;
  imageClone.src = images[i].src;
  console.log("считаем фото");
}

function imageLoaded() {
  imagesLoadedCount++;
  percDisplay.innerHTML = (((100 / allImages) * imagesLoadedCount) << 0) + "%";
  console.log("внутри загрузки");
  if (imagesLoadedCount >= allImages) {
    setTimeout(() => {
      if (!preloader.classList.contains("preloader__done")) {
        console.log("заканчиваем");
        preloader.classList.add("preloader__done");
      }
    }, 1000);
  }
}