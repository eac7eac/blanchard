const params = {
  btnClassName: "header-bottom__item-btn",
  dropClassName: "header-bottom__dropdown",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
}

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(params.disabledClassName, params.activeClassName);
    evt.target.removeEventListener("animationend", onDisable);
  }
}

function setMenuListener() {
  document.body.addEventListener("click", (evt) => {
    const activeElements = document.querySelectorAll(`.${params.activeClassName}`);

    if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
      activeElements.forEach((current) => {
        if (current.classList.contains(params.btnClassName)) {
          current.classList.remove(params.activeClassName);
        } else {
          current.classList.add(params.disabledClassName);
        }
      });
    }

    if (evt.target.closest(`.${params.btnClassName}`)) {
      const btn = evt.target.closest(`.${params.btnClassName}`);
      const path = btn.dataset.path;
      const drop = document.querySelector(`[data-target="${path}"]`);

      btn.classList.toggle(params.activeClassName);

      if (!drop.classList.contains(params.activeClassName)) {
        drop.classList.add(params.activeClassName);
        drop.addEventListener("animationend", onDisable);
      } else {
        drop.classList.add(params.disabledClassName);
      }
    }
  });
}

setMenuListener();

(() => {
  const searchButton = document.querySelector('.header-form__btn');
  const searchInput = document.querySelector('.header-form__input');
  const searchLabel = document.querySelector('.header-form__label');
  const burgerOpenButton = document.querySelector('.header-top__burger-btn');
  const navigationMenu = document.querySelector('.header-top__nav');
  const enterButton = document.querySelector('.header-top__enter-btn');
  const burgerCloseButton = document.querySelector('.header-burger__close-btn');
  const searchCloseButton = document.querySelector('.search-close__btn');
  const searchForm = document.querySelector('.header-form');
  const headerLogo = document.querySelector('.header-top__logo');
  const searchMobileContainer = document.querySelector('.header__bottom-wrapper');

  const MOBILE_WIDTH = 768;


  function openSearchInput(arr) {
    // searchButton.classList.add('search-visible');
    // searchLabel.classList.add('search-visible');
    // searchCloseButton.classList.add('search-visible');
    for (let index of arr) {
      for (let el of index) {
        index[0].classList.add(index[1]);
      }
    }
  };

  function closeSearchInput(arr) {
    // searchButton.classList.remove('search-visible');
    // searchLabel.classList.remove('search-visible');
    // searchCloseButton.classList.remove('search-visible');
    for (let index of arr) {
      for (let el of index) {
        index[0].classList.remove(index[1]);
      }
    }
  };


  let searchInputElements = [[searchButton, 'search-visible'], [searchLabel, 'search-visible'], [searchCloseButton, 'search-visible']]
  let searchInputElementsMobile = [[searchMobileContainer, 'search-visible-mobile']];


  searchInput.addEventListener('mouseover', function() {
    openSearchInput(searchInputElements);
    if (document.body.clientWidth <= MOBILE_WIDTH) {
      searchCloseButton.addEventListener('click', function() {
        closeSearchInput(searchInputElements);
      });
    } else {
      searchInput.addEventListener('mouseout', function() {
        closeSearchInput(searchInputElements);
      });
    }
  });


  searchButton.addEventListener('mouseover', function() {
    if (document.body.clientWidth > MOBILE_WIDTH) {
      openSearchInput(searchInputElements);
      searchButton.addEventListener('mouseout', function() {
        closeSearchInput(searchInputElements);
      });
    } else {
      openSearchInput(searchInputElementsMobile);
      searchCloseButton.addEventListener('click', function() {
        closeSearchInput(searchInputElementsMobile);
      });
    }
  });


  searchInput.addEventListener('focus', function() {
    openSearchInput(searchInputElements);
    if (document.body.clientWidth <= MOBILE_WIDTH) {
      searchCloseButton.addEventListener('click', function() {
        closeSearchInput(searchInputElements);
      });
    } else {
      searchInput.addEventListener('mouseout', function() {
        openSearchInput(searchInputElements);
      });
    }
  });


  searchInput.addEventListener('blur', function() {
    openSearchInput(searchInputElements);
    if (document.body.clientWidth <= MOBILE_WIDTH) {
      searchCloseButton.addEventListener('click', function() {
        closeSearchInput(searchInputElements);
      });
    } else {
      closeSearchInput(searchInputElements);
    };
  });



  function burgerMenuVisibility() {
    navigationMenu.classList.remove('burger-menu--visibility');
    enterButton.classList.remove('burger-menu--visibility');
    burgerCloseButton.classList.remove('burger-menu--visibility');
  };

  burgerOpenButton.addEventListener('click', function() {
    navigationMenu.classList.add('burger-menu--open', 'burger-menu--visibility');
    enterButton.classList.add('burger-menu--open', 'burger-menu--visibility');
    burgerCloseButton.classList.add('burger-menu--open', 'burger-menu--visibility');
  });

  burgerCloseButton.addEventListener('click', function() {
    navigationMenu.classList.remove('burger-menu--open');
    enterButton.classList.remove('burger-menu--open');
    burgerCloseButton.classList.remove('burger-menu--open');
    setTimeout(burgerMenuVisibility, 1000);
  });

})();
