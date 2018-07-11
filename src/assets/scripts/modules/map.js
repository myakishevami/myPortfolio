
document.addEventListener('DOMContentLoaded', function () {
  
  ymaps.ready(init);
  function init(){ 
      // Создание карты.    
      var myMap = new ymaps.Map("google-map", {
          // Координаты центра карты.
          // Порядок по умолчнию: «широта, долгота».
          // Чтобы не определять координаты центра карты вручную,
          // воспользуйтесь инструментом Определение координат.
          center: [55.026698, 82.919089],
          // Уровень масштабирования. Допустимые значения:
          // от 0 (весь мир) до 19.
          zoom: 11
      });
    };
});
       // Создаём макет содержимого.
      // MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
     //   '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
   // )
/*
    myPlacemark = new ymaps.Placemark([55.081988, 82.924562], {
        hintContent: 'Собственный значок метки',
        balloonContent: 'Это красивая метка'
    }, {
        // Опции.
        // Необходимо указать данный тип макета.
        iconLayout: 'default#image',
        // Своё изображение иконки метки.
        iconImageHref: './img/map-marker.png',
        // Размеры метки.
        iconImageSize: [30, 42],
        // Смещение левого верхнего угла иконки относительно
        // её "ножки" (точки привязки).
        iconImageOffset: [-5, -38]
    });
    myMap.geoObjects
    .add(myPlacemark);

    myMap.behaviors.disable('scrollZoom');*/
 // }

//});