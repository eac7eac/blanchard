tippy('.js-tooltip', {
  theme: 'section-projects',
  trigger: 'click',
});




(() => {
  const MOBILE_WIDTH = 580;

  const sliderParamsNotMobile = {
    sliderWrap: "section-projects__js-slider-main",
    cardsContainerName: "section-projects__js-slider",
    cardsWrapName: "section-projects__js-slides-wrap",
    card: "section-projects__slide",
    navClassName: "section-projects__test-navigation",
    navBtnClassName: "section-projects__nav-btn",
    navPrev: "section-projects__btn-prev",
    navNext: "section-projects__btn-next"
  };

  function getWindowWidth() {
    console.log(document.body.scrollWidth);
    return Math.max(
      document.body.scrollWidth,
      document.documentElement.scrollWidth,
      document.body.offsetWidth,
      document.documentElement.offsetWidth,
      document.body.clientWidth,
      document.documentElement.clientWidth
    );
  }

  function activateSlider(params) {
    const navigation = document.createElement("div");
    const navBtnPrev = document.createElement("button");
    const navBtnNext = document.createElement("button");

    navigation.classList.add(params.navClassName);

    navBtnPrev.classList.add(params.navBtnClassName);
    navBtnPrev.classList.add(params.navPrev);
    navigation.prepend(navBtnPrev);

    navBtnNext.classList.add(params.navBtnClassName);
    navBtnNext.classList.add(params.navNext);
    navigation.append(navBtnNext);

    params.sliderWrapElem.append(navigation);

    params.cardsContainer.classList.add("swiper-container");
    params.cardsWrap.classList.add("swiper-wrapper");

    params.cardsSlider = new Swiper(`.${params.cardsContainerName}`, {

      breakpoints: {
        581: {
          slidesPerView: 2,
          spaceBetween: 34,
        },
        841: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
         1200: {
          slidesPerView: 3,
          spaceBetween: 50
        },
      },

      navigation: {
        nextEl: `.${params.navNext}`,
        prevEl: `.${params.navPrev}`
      },

      on: {
        beforeInit() {
          document.querySelectorAll(`.${params.card}`).forEach((el) => {
            el.classList.add("swiper-slide");
          });
        },

        beforeDestroy() {
          this.slides.forEach((el) => {
            el.classList.remove("swiper-slide");
            el.removeAttribute("role");
            el.removeAttribute("aria-label");
          });

          this.pagination.el.remove();
          navigation.remove();
        }
      }
    });
  }

  function destroySlider(params) {
    params.cardsSlider.destroy();
    params.cardsContainer.classList.remove("swiper-container");
    params.cardsWrap.classList.remove("swiper-wrapper");
    params.cardsWrap.removeAttribute("aria-live");
    params.cardsWrap.removeAttribute("id");
  }

  function checkWindowWidth(params) {
    const currentWidth = getWindowWidth();
    params.sliderWrapElem = document.querySelector(`.${params.sliderWrap}`);
    params.cardsContainer = document.querySelector(`.${params.cardsContainerName}`);
    params.cardsWrap = document.querySelector(`.${params.cardsWrapName}`);

    // if (
    //   currentWidth > MOBILE_WIDTH &&
    //   (!params.cardsSlider || params.cardsSlider.destroyed)
    // ) {
      activateSlider(params);
    // } else if (currentWidth <= MOBILE_WIDTH && params.cardsSlider) {
    //   destroySlider(params);
    // }
  }

  checkWindowWidth(sliderParamsNotMobile);

  window.addEventListener("resize", function () {
    checkWindowWidth(sliderParamsNotMobile);
  });
})();







