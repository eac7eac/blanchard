(() => {
  const checkBtn = document.querySelector('.editions-form__js-check');

  checkBtn.addEventListener('click', function () {
      this.classList.toggle('is-active');
  });
})();





let editionsSlider = new Swiper(".section-editions__slides-container", {
  slidesPerView: 2,
  grid: {
    rows: 4,
    fill: "row"
  },
  spaceBetween: 30,
  pagination: {
    el: ".section-editions .section-editions__pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".section-editions__next-btn",
    prevEl: ".section-editions__prev-btn"
  },

  breakpoints: {
    441: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 34
    },

    960: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 47
    },

    1200: {
      slidesPerView: 3,
      grid: {
        rows: 1
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
