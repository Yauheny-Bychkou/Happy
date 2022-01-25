$(document).ready(function () {
  const sectionsSlider = new Swiper(".sections-container", {
    // Optional parameters

    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
      nextEl: ".sections-wrap__button-next",
      prevEl: ".sections-wrap__button-prev",
      disabledClass: "sections-wrap__button-hidden",
    },

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerColumnFill: "row",
        spaceBetween: 10,
      },

      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 4,
        spaceBetween: 28,
      },
    },
  });

  const booksSlider = new Swiper(".books-container", {
    // Navigation arrows
    navigation: {
      nextEl: ".books-container__next",
      prevEl: ".books-container__prev",
      disabledClass: "books-container__button-disabled",
    },
    slidesPerView: 1,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 100,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      770: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      992: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });

  var menuButton = $(".header__button-small");
  menuButton.on("click", function () {
    $(".theory__bottom").toggleClass("theory__bottom--visible");
    $("body").toggleClass("overflow--hidden");
  });
  var colorLike = $(".recomendation-left__text-world");
  colorLike.on("click", function () {
    $(".recomendation-left__text-world").toggleClass("recomendation-left__text-red");
  });
  var colorLike = $(".recomendation-left__text-educated");
  colorLike.on("click", function () {
    $(".recomendation-left__text-educated").toggleClass("recomendation-left__text-red");
  });
  var colorLike = $(".recomendation-left__text-flowers");
  colorLike.on("click", function () {
    $(".recomendation-left__text-flowers").toggleClass("recomendation-left__text-red");
  });
  var colorLike = $(".recomendation-left__text-there");
  colorLike.on("click", function () {
    $(".recomendation-left__text-there").toggleClass("recomendation-left__text-red");
  });
  var colorLike = $(".recomendation-left__text-business");
  colorLike.on("click", function () {
    $(".recomendation-left__text-business").toggleClass("recomendation-left__text-red");
  });
  var colorLike = $(".recomendation-left__text-making");
  colorLike.on("click", function () {
    $(".recomendation-left__text-making").toggleClass("recomendation-left__text-red");
  });

  var linkButton = $(".theory__link");
  linkButton.on("click", function () {
    $(".theory__bottom").removeClass("theory__bottom--visible");
    $("body").removeClass("overflow--hidden");
  });

  var buttonBook = $(".recomendation-left__text-button");
  buttonBook.on("click", function () {
    event.preventDefault();
  });
  var rightBook = $(".recomendation-right__text-button");
  rightBook.on("click", function () {
    event.preventDefault();
  });

  var closeModalOverlay = $(".modal__overlay");
  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);
  closeModalOverlay.on("click", closeModal);

  var menuButton = $("[data-toggle=menu]");
  menuButton.on("click", openMenu);
  function openMenu() {
    var menuOverlay = $(".menu__overlay");
    var menuDialog = $(".menu__dialog");
    menuOverlay.addClass("menu__overlay--visible");
    menuDialog.addClass("menu__dialog--visible");
  }
  var likeButton = $(".footer__bottom-icon");
  likeButton.on("click", paintHover);
  function paintHover() {
    var svgHover = $(".footer__bottom-svg");
    svgHover.toggleClass("footer__bottom-svg--hover");
  }

  var buttonExit = $(".menu__close");
  buttonExit.on("click", closeMenu);
  function closeMenu(event) {
    event.preventDefault();
    var menuOverlay = $(".menu__overlay");
    var menuDialog = $(".menu__dialog");
    menuOverlay.removeClass("menu__overlay--visible");
    menuDialog.removeClass("menu__dialog--visible");
  }

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    var modalBody = $("body");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
    modalBody.addClass("overflow--hidden");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    var modalBody = $("body");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
    modalBody.removeClass("overflow--hidden");
    $(document).on("keyup", function (event) {
      if (event.keyCode == 27) {
        modalOverlay.removeClass("modal__overlay--visible");
        modalDialog.removeClass("modal__dialog--visible");
        modalBody.removeClass("overflow--hidden");
      }
    });
  }
  $(".header__link-recomendation").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $("#anchor-1").offset().top }, 1000);
    e.preventDefault();
  });
  $(".header__link-books").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $("#anchor-2").offset().top }, 2000);
    e.preventDefault();
  });
  $(".header__link-blog").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $("#anchor-3").offset().top }, 3000);
    e.preventDefault();
  });
  $(".theory__link-books").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $("#anchor-2").offset().top }, 2000);
    e.preventDefault();
  });
  $(".theory__link-blog").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $("#anchor-3").offset().top }, 3000);
    e.preventDefault();
  });
  $(".theory__link-recomendation").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $("#anchor-1").offset().top }, 3000);
    e.preventDefault();
  });
  $(".to-top").on("click", function (e) {
    $("html,body")
      .stop()
      .animate({ scrollTop: $("#anchor-4").offset().top }, 3000);
    e.preventDefault();
  });
  $(".form").validate({
    errorClass: "input__error",
    messages: {
      name: {
        required: "This field is required",
        minlength: "The name must be at least 2 letters long. You only entered 1 letter",
      },
      email: {
        required: "This field is required",
        email: "Your email address must be in the format of name@domain.com",
      },
      phone: {
        required: "This field is required",
        minlength: "The number must be at least 11 digits long",
      },
    },
  });
  $(".menu__form").validate({
    errorClass: "input__error",
    messages: {
      name: {
        required: "This field is required",
        minlength: "The name must be at least 2 letters long. You only entered 1 letter",
      },
      email: {
        required: "This field is required",
        email: "Your email address must be in the format of name@domain.com",
        minlength: "The name must be at least 2 letters long. You only entered 1 letter",
      },
      phone: {
        required: "This field is required",
        minlength: "The number must be at least 11 digits long",
      },
    },
  });
  $(".newsletter__subscribe").validate({
    errorClass: "input__newsletter",
    errorElement: "div",
    messages: {
      email: {
        required: "This field is required",
        email: "Your email address must be in the format of name@domain.com",
      },
    },
  });
  $("input[type='tel']").mask("+7 (000) 000-0000");
});
const rndColor = () => {
    const base  = Math.random() * 360 | 0;
    const color = (275 * (base / 200 | 0)) + base % 200;
    return fac => `hsl(${color}, ${(fac || 1) * 100}%, ${(fac || 1) * 60}%)`;
};

class Battery
{
    constructor(fireworks) {
        this.fireworks = fireworks;
        this.salve = [];
        this.x     = Math.random();
        this.t     = 0;
        this.tmod  = 20 + Math.random() * 20 | 0;
        this.tmax  = 500 + Math.random() * 1000;

        this._shot = salve => {
            // console.log(this.x * this.fireworks.width, salve.y);
            if (salve.y < salve.ym) {
                salve.cb = this._prepareExplosion;
            }

            salve.x += salve.mx;
            salve.y -= 0.01;

            const r = Math.atan2(-0.01, salve.mx);

            this.fireworks.engine.strokeStyle = salve.c(.7);
            this.fireworks.engine.beginPath();

            this.fireworks.engine.moveTo(
                (this.x + salve.x) * this.fireworks.width + Math.cos(r) * 4,
                salve.y * this.fireworks.height + Math.sin(r) * 4
            );

            this.fireworks.engine.lineTo(
                (this.x + salve.x) * this.fireworks.width + Math.cos(r + Math.PI) * 4,
                salve.y * this.fireworks.height + Math.sin(r + Math.PI) * 4
            );

            this.fireworks.engine.lineWidth = 3;
            this.fireworks.engine.stroke();

            // this.fireworks.engine.fillRect((this.x + salve.x) * this.fireworks.width, salve.y * this.fireworks.height, 10, 10);
        };

        this._prepareExplosion = salve => {
            salve.explosion = [];

            for (let i = 0, max = 32; i < max; i++) {
                salve.explosion.push({
                    r : 2 * i / Math.PI,
                    s : 0.5 + Math.random() * 0.5,
                    d : 0,
                    y : 0
                });
            }

            salve.cb = this._explode;
        };

        this._explode = salve => {

            this.fireworks.engine.fillStyle = salve.c();

            salve.explosion.forEach(explo => {

                explo.d += explo.s;
                explo.s *= 0.99;
                explo.y += 0.5;

                const alpha = explo.s * 2.5;
                this.fireworks.engine.globalAlpha = alpha;

                if (alpha < 0.05) {
                    salve.cb = null;
                }

                this.fireworks.engine.fillRect(
                    Math.cos(explo.r) * explo.d + (this.x + salve.x) * this.fireworks.width,
                    Math.sin(explo.r) * explo.d + explo.y + salve.y * this.fireworks.height,
                    3,
                    3
                );
            });

            this.fireworks.engine.globalAlpha = 1;
        }
    }

    pushSalve() {
        this.salve.push({
            x: 0,
            mx: -0.02 * Math.random() * 0.04,
            y: 1,
            ym: 0.05 + Math.random() * 0.5,
            c: rndColor(),
            cb: this._shot
        });
    };

    render() {

        this.t++;

        if (this.t < this.tmax && (this.t % this.tmod) === 0) {
            this.pushSalve();
        }

        let rendered = false;

        this.salve.forEach(salve => {

            if (salve.cb) {
                rendered = true;
                salve.cb(salve);
            }

        });

        if (this.t > this.tmax) {
            return rendered;
        }

        return true;
    }
}

class Fireworks
{
    constructor() {
        this.canvas = window.document.querySelector('canvas');
        this.engine = this.canvas.getContext('2d');
        this.stacks = new Map();

        this.resize();
    }

    resize() {
        this.width  = window.innerWidth;
        this.height = window.innerHeight;

        this.canvas.setAttribute('width', this.width);
        this.canvas.setAttribute('height', this.height);
    }

    clear() {
        this.engine.clearRect(0, 0, this.width, this.height);
        this.engine.fillStyle = '#222';
        this.engine.fillRect(0, 0, this.width, this.height);
    }

    addBattery() {
      const bat = new Battery(this);
      this.stacks.set(Date.now(), bat);  
    }
  
    render() {

        if (Math.random() < 0.05) {
          this.addBattery();
        }
      
        this.clear();

        this.stacks.forEach((scene, key) => {

            const rendered = scene.render();

            if (!rendered) {
                this.stacks.delete(key);
            }
        });

        requestAnimationFrame(this.render.bind(this));
    }

    run() {
        for(let i = 0; i < 5; i++) {
          this.addBattery();
        }
        window.addEventListener('resize', this.resize.bind(this));
        this.render();
    }
}

a = new Fireworks();
a.run();
