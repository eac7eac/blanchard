document.addEventListener('DOMContentLoaded', function () {
  $( ".accordion" ).accordion({
    heightStyle: 'content',
    collapsible: true,
    active: 0,
    icons: false
  });

  document.querySelectorAll('.section-catalog__title-btn').forEach(function(catalogBtn) {
    catalogBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.catalog-content__country-wrapper').forEach(function(countryWrapper) {
        countryWrapper.classList.remove('catalog-content__country-wrapper--active');
      })

      if (path !== 'italy') {
        document.querySelector(`[data-target="catalog-plug"]`).classList.add('catalog-content__country-wrapper--active');
      } else {
        document.querySelector(`[data-target="${path}"]`).classList.add('catalog-content__country-wrapper--active');
      }

      $('.accordion').accordion("refresh")

      document.querySelectorAll('.section-catalog__title-btn').forEach(function(howLinkActive) {
        howLinkActive.classList.remove('section-catalog__title-btn--active');
      })

      document.querySelector(`[data-path="${path}"]`).classList.add('section-catalog__title-btn--active');
    })
  });

  document.querySelectorAll('.catalog-accordion__content-btn').forEach(function(contentBtn) {
    contentBtn.addEventListener('click', function(event) {
      const path = event.currentTarget.dataset.path;

      document.querySelectorAll('.catalog-content__painter-wrapper').forEach(function(painterWrapper) {
        painterWrapper.classList.remove('catalog-content__painter-wrapper--active');
      })

      if (path === 'painter-plug') {
        document.querySelector(`[data-target="painter-plug"]`).classList.add('catalog-content__painter-wrapper--active');
      } else {
        document.querySelector(`[data-target="${path}"]`).classList.add('catalog-content__painter-wrapper--active');
      }

      // $('.accordion').accordion("refresh")

      // document.querySelectorAll('.section-how__link').forEach(function(howLinkActive) {
      //   howLinkActive.classList.remove('section-how__link--active');
      // })
      // document.querySelector(`[data-path="${path}"]`).classList.add('section-how__link--active');
    })
  })
});

