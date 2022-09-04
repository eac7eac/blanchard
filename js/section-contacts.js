ymaps.ready(init);
function init() {
  const mapElem = document.querySelector('#map');
  const myMap = new ymaps.Map("map", {
    center: [55.75846806898367, 37.60108849999989],
    zoom: 14,
    controls: ['geolocationControl', 'zoomControl']
  },
  {
    suppressMapOpenBlock: true,
    geolocationControlSize: "large",
    geolocationControlPosition:  { top: "200px", right: "20px" },
    geolocationControlFloat: 'none',
    zoomControlSize: "small",
    zoomControlFloat: "none",
    zoomControlPosition: { top: "120px", right: "20px" }
  });

  var myPlacemark = new ymaps.Placemark([55.75846806898367, 37.60108849999989], {}, {
    iconLayout: "default#image",
    iconImageHref: "img/section-contacts__mark.svg",
    iconImageSize: [40, 40],
    // iconImageOffset: [-20, -40],
  });

  myMap.geoObjects.add(myPlacemark);

  setTimeout(() => {
    myMap.container.fitToViewport();
  }, 5000);
}




// ymaps.ready(init);
// function init(){
//   var myMap = new ymaps.Map("map", {
//     center: [48.872185, 2.354224],
//     zoom: 16
//   });

//   var myPlacemark = new ymaps.Placemark([48.872185, 2.354224], {}, {
//     iconLayout: 'default#image',
//     iconImageHref: 'img/section-map__mark.svg',
//     iconImageSize: [28, 40],
//   });

//   myMap.geoObjects.add(myPlacemark);

//   myMap.controls.remove('zoomControl');
//   myMap.controls.remove('geolocationControl');
//   myMap.controls.remove('routeButtonControl');
//   myMap.controls.remove('searchControl');
//   myMap.controls.remove('trafficControl');
//   myMap.controls.remove('typeSelector');
//   myMap.controls.remove('fullscreenControl');
//   myMap.controls.remove('rulerControl');

// }
