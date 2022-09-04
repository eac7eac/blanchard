const element = document.querySelector('.section-gallery__dropdown');
const choices = new Choices(element, {
  searchEnabled: false,
  shouldSort: false,
  position: 'select-one'
});

let pictureGallery = document.querySelector('.section-gallery__slide-picture');
let imageGallery = document.querySelector('.section-gallery__image');
let imageGalleryHeight = imageGallery.style.height;
imageGalleryHeight = imageGallery.scrollHeight;
pictureGallery.style.height = imageGallery.scrollHeight;

function Selected(a) {
    let label = a.value;
    const painting = document.getElementById("section-gallery__painting-item");
    const drawing = document.getElementById("section-gallery__drawing-item");
    const sculpture = document.getElementById("section-gallery__sculpture-item");
    if (label === "painting") {
        painting.style.visibility = 'visible';
        drawing.style.visibility = 'hidden';
        sculpture.style.visibility = 'hidden';
    } else if (label === "drawing") {
        painting.style.visibility = 'hidden';
        drawing.style.visibility = 'visible';
        sculpture.style.visibility = 'hidden';
    } else if (label === "sculpture") {
        painting.style.visibility = 'hidden';
        drawing.style.visibility = 'hidden';
        sculpture.style.visibility = 'visible';
    }

  }



let gallerySlider = new Swiper(".section-gallery__slides-container", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
  pagination: {
    el: ".section-gallery .section-gallery__pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".section-gallery__next-btn",
    prevEl: ".section-gallery__prev-btn"
  },

  breakpoints: {
    581: {
      slidesPerView: 2,
      grid: {
        rows: 2
      },
      spaceBetween: 30
    },

    1200: {
      slidesPerView: 3,
      grid: {
        rows: 2
      },
      spaceBetween: 50
    }
  },

  a11y: false,
  keyboard: true, // можно управлять с клавиатуры стрелками влево/вправо

  // Дальнейшие надстройки делают слайды вне области видимости не фокусируемыми
  watchSlidesProgress: true,
  slideVisibleClass: 'slide-visible',

  on: {
    init: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    },
    slideChange: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    }
  }

  // on: {
  //   /* исправляет баг с margin-top остающимся при смене брейкпоинта, это было нужно в 6-й версии свайпера */
  //   beforeResize: function () {
  //     this.slides.forEach((el) => {
  //       el.style.marginTop = "";
  //     });
  //   }
  // }
});
