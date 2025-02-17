(function ($) {
  "use strict";

  // Spinner
  var spinner = function () {
    setTimeout(function () {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

  // Initiate the wowjs
  new WOW().init();

  // Sticky Navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });
  $(".back-to-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
    return false;
  });

  // Facts counter
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 2000,
  });

  // Date and time picker
  $(".date").datetimepicker({
    format: "L",
  });
  $(".time").datetimepicker({
    format: "LT",
  });

  // Header carousel
  $(".header-carousel").owlCarousel({
    autoplay: false,
    animateOut: "fadeOutLeft",
    items: 1,
    dots: true,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
  });

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: false,
    smartSpeed: 1000,
    center: true,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  });
})(jQuery);

let name1 = document.querySelector("#name");
let email = document.querySelector("#email");
let date1 = document.querySelector("#date1");
let date2 = document.querySelector("#date2");
let text = document.querySelector("#text");
let btn = document.querySelector("#button");
let slc = document.querySelector("#select");
let mobile = document.querySelector("#mobile");
let footerEmail = document.querySelector("#footerEmail");
let footerSubmit = document.querySelector("#footerSubmit");

btn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(mobile.value);
  fetch("http://localhost:3000/", {
    headers: { "content-type": "application/json" },
    method: "POST",
    body: JSON.stringify({
      name: name1.value,
      email: email.value,
      date: date1.value,
      text: text.value,
      slc: slc.value,
      mobile: mobile.value,
    }),
  })
    .then((data) => data.json())
    .then((res) => {
      console.log(res);
    });
});
footerSubmit.addEventListener("click", (event) => {
  event.preventDefault();
  fetch("http://localhost:3000/sub", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: footerEmail.value,
    }),
  })
    .then((data) => {
      console.log(data.status);

      return data.json();
    })
    .then((response) => {
      console.log(response);
    })
    .catch(console.log);
});
