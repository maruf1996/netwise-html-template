(function ($) {
  "use strict";

  // fixed menu js
  $(window).on("scroll", function () {
    let scroll = $(window).scrollTop();
    if (scroll < 120) {
      $("#sticky-header").removeClass("sticky-menu");
      $("#header-fixed-height").removeClass("active-height");
    } else {
      $("#sticky-header").addClass("sticky-menu");
      $("#header-fixed-height").addClass("active-height");
    }
  });

  /* Data Background js */
  $("[data-background]").each(function () {
    $(this).css(
      "background-image",
      "url(" + $(this).attr("data-background") + ")"
    );
  });

  // Magnific popup image js
  $(".image-popup").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });

  // Team move and active js
  var team_item = gsap.utils.toArray(".team-item");
  let hover_img = gsap.utils.toArray(".hover-image");

  // Function to move the service image on mouse move
  function ServiceImageMove(event, item) {
    const contentBox = item.getBoundingClientRect();
    const dx = (event.clientX - contentBox.x - contentBox.width / 1) / 3;
    const dy = (event.clientY - contentBox.y - contentBox.height / 1) / 10;

    hover_img.forEach((img) => {
      gsap.to(img, {
        x: dx,
        y: dy,
      });
    });
  }

  // Add hover effect only for screens larger than 768px
  if (window.innerWidth > 767) {
    team_item.forEach((item, i) => {
      item.addEventListener("mousemove", (event) => {
        ServiceImageMove(event, item);
      });

      item.addEventListener("mouseleave", () => {
        hover_img.forEach((img) => {
          gsap.to(img, {
            x: 0,
            y: 0,
          });
        });
      });
    });

    // Add active team class on hover
    $(".team-item").hover(function () {
      $(".team-item").removeClass("active-team");
      $(this).addClass("active-team");
    });
  }

  /* Odometer Activeate js */
  $(document).ready(function () {
    $(".odometer").appear(function () {
      var odo = $(".odometer");
      odo.each(function () {
        var countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
      });
    });
  });

  // Services slider js
  $(".services-slider").slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    prevArrow: '<i class="fa-solid arrow arrow-prev fa-arrow-left"></i>',
    nextArrow: '<i class="fa-solid arrow arrow-next fa-arrow-right"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  // testimonial slider js
  $(".testimonial-slider").slick({
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  });

  // Mobile menu js start
  $(".mobile-topbar .bars").on("click", function () {
    $(".mobile-menu-overlay,.mobile-menu-main").addClass("active");
  });

  $(".close-mobile-menu,.mobile-menu-overlay").on("click", function () {
    $(".mobile-menu-overlay,.mobile-menu-main").removeClass("active");
  });

  $(".sub-mobile-menu ul").hide();
  $(".sub-mobile-menu a").on("click", function () {
    $(".sub-mobile-menu ul").not($(this).next("ul")).slideUp(300);
    $(".sub-mobile-menu a i")
      .not($(this).find("i"))
      .removeClass("fa-chevron-up")
      .addClass("fa-chevron-down");
    $(this).next("ul").slideToggle(300);
    $(this).find("i").toggleClass("fa-chevron-up fa-chevron-down");
  });
})(jQuery);
