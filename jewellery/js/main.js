'use strict';

(function () {
  var accordions = document.querySelectorAll('.accordion');
  var accordionBtns = document.querySelectorAll('.accordion__btn');
  if (accordions) {
    var showContent = function (j) {
      return function (evt) {
        evt.preventDefault();
        var accordionBlock = accordionBtns[j].closest('.accordion');
        if (accordionBlock.classList.contains('accordion--show')) {
          accordionBlock.classList.remove('accordion--show');
        } else {
          accordionBlock.classList.add('accordion--show');
        }
      };
    };
    for (var i = 0; i < accordions.length; i++) {
      accordions[i].classList.remove('accordion--nojs');
    }
    for (var j = 0; j < accordionBtns.length; j++) {
      accordionBtns[j].addEventListener('click', showContent(j));
    }
  }
})();

(function () {
  var ESC = 27;
  var cartOpenbtn = document.querySelector('.card__add-button');
  if (cartOpenbtn) {
    var cartModal = document.querySelector('.cart');
    var cartCloseBtn = cartModal.querySelector('.cart__close');
    var openModal = function () {
      cartModal.classList.add('cart--show');
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onModalEcsPress);
      cartCloseBtn.addEventListener('click', function () {
        closeModal();
      });
    };
    var closeModal = function () {
      if (cartModal.classList.contains('cart--show')) {
        cartModal.classList.remove('cart--show');
        document.body.style.overflow = '';
      }
      window.removeEventListener('keydown', onModalEcsPress);
    };
    var onModalEcsPress = function (evt) {
      if (evt.keyCode === ESC) {
        evt.preventDefault();
        closeModal();
      }
    };
    cartOpenbtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      openModal();
    });
    cartModal.addEventListener('click', function (evt) {
      var cartContent = cartModal.querySelector('.cart__content');
      if (!cartContent.contains(evt.target)) {
        closeModal();
      }
    });
  }
})();

(function () {
  var ESC = 27;
  var filter = document.querySelector('.filter');
  var filterBtnOpen = document.querySelector('.filter__btn-open');
  var filterBtnClose = document.querySelector('.filter__btn-close');
  if (filter) {
    filter.classList.remove('filter--nojs');
    filterBtnOpen.addEventListener('click', function () {
      filter.classList.remove('filter--hide');
      document.body.style.overflow = 'hidden';
    });
    filterBtnClose.addEventListener('click', function () {
      filter.classList.add('filter--hide');
      document.body.style.overflow = '';
    });
    window.addEventListener('keydown', function (evt) {
      if (evt.keyCode === ESC) {
        evt.preventDefault();
        filter.classList.add('filter--hide');
      }
    });
  }
})();

(function () {
  var navMain = document.querySelector('.header');
  var navToggle = document.querySelector('.header__toggle');
  if (navMain) {
    navMain.classList.remove('header--nojs');
    navToggle.addEventListener('click', function () {
      if (navMain.classList.contains('header--hide')) {
        navMain.classList.remove('header--hide');
        document.body.style.overflow = 'hidden';
      } else {
        navMain.classList.add('header--hide');
        document.body.style.overflow = '';
      }
    });
  }
})();

(function () {
  var ESC = 27;
  var loginOpenbtn = document.querySelector('.header__link--login');
  var loginModal = document.querySelector('.login');
  if (loginModal) {
    var loginCloseBtn = loginModal.querySelector('.login__close');
    var form = loginModal.querySelector('form');
    var userEmail = form.querySelector('[name=email]');
    var userPassword = form.querySelector('[name=password]');
    var isStorageSupport = true;
    var storage = '';
    try {
      storage = localStorage.getItem('email');
    } catch (err) {
      isStorageSupport = false;
    }
    var openModal = function () {
      loginModal.classList.add('login--show');
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', onModalEcsPress);
      loginCloseBtn.addEventListener('click', function () {
        closeModal();
      });
    };
    var closeModal = function () {
      if (loginModal.classList.contains('login--show')) {
        loginModal.classList.remove('login--show');
        document.body.style.overflow = '';
      }
      window.removeEventListener('keydown', onModalEcsPress);
    };
    var onModalEcsPress = function (evt) {
      if (evt.keyCode === ESC) {
        evt.preventDefault();
        closeModal();
      }
    };
    loginOpenbtn.addEventListener('click', function (evt) {
      evt.preventDefault();
      openModal();
      if (storage) {
        userEmail.value = storage;
        userPassword.focus();
      } else {
        userEmail.focus();
      }
    });
    loginModal.addEventListener('click', function (evt) {
      var loginContent = loginModal.querySelector('.login__content');
      if (!loginContent.contains(evt.target)) {
        closeModal();
      }
    });
    form.addEventListener('submit', function () {
      if (isStorageSupport) {
        localStorage.setItem('email', userEmail.value);
      }
    });
  }
})();

/* eslint-disable */
(function () {
  var swiper = document.querySelector('.swiper-container');
  if (swiper) {
    var swiper = new Swiper('.swiper-container', {
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 30,
          slidesPerGroup: 2,
          pagination: {
            el: '.swiper-pagination',
            type: "custom",
            clickable: true,
            renderCustom: function (swiper, current, total) {
              return current + '  of  ' + total;
            },
          },
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
          slidesPerGroup: 2,
          pagination: {
            type: 'bullets',
          },
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 30,
          slidesPerGroup: 4,
        },
      },
      navigation: {
        nextEl: '.product-slider__control--next',
        prevEl: '.product-slider__control--prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        type: 'bullets',
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
      },
    });
  }
})();
/* eslint-enable */

(function () {
  var jsTriggers = document.querySelectorAll('.tabs__trigger');
  if (jsTriggers) {
    var activateTabsContent = function (i) {
      return function () {
        var id = jsTriggers[i].getAttribute('data-tab');
        var content = document.querySelector('.tabs__card[data-tab="' + id + '"]');
        var activeTrigger = document.querySelector('.tabs__trigger.active');
        var activeContent = document.querySelector('.tabs__card.active');
        activeTrigger.classList.remove('active');
        jsTriggers[i].classList.add('active');
        activeContent.classList.remove('active');
        content.classList.add('active');
      };
    };
    for (var i = 0; i < jsTriggers.length; i++) {
      jsTriggers[i].addEventListener('click', activateTabsContent(i));
    }
  }
})();
