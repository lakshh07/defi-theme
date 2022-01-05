$(document).ready(function () {
  let splide = new Splide(".splide", {
    perPage: 3,
    rewind: true,
    perMove: 1,
    focus: "center",
    type: "loop",
    drag: "free",
    autoplay: true,
    gap: "3rem",
    interval: 3500,
    breakpoints: {
      768: {
        perPage: 2,
        gap: ".7rem",
        // height: "6rem",
      },
      425: {
        perPage: 1,
        gap: "0rem",
        // height: "6rem",
      },
    },
  });
  let bar = splide.root.querySelector(".my-slider-progress-bar");

  // Update the bar width:
  // splide.on("mounted move", function () {
  //   let end = splide.Components.Controller.getEnd() + 1;
  //   bar.style.width = String((100 * (splide.index + 1)) / end) + "%";
  // });
  splide.mount();
  // new Splide(".splide").mount();
  $("#lightSlider").lightSlider({
    item: 3,
    autoWidth: false,
    slideMove: 1, // slidemove will be 1 if loop is true
    slideMargin: 10,

    addClass: "",
    mode: "slide",
    useCSS: true,
    cssEasing: "cubic-bezier(0.25, 0, 0.25, 1)", //'cubic-bezier(0.25, 0, 0.25, 1)',//
    easing: "cubic-bezier(0.25, 0, 0.25, 1)", //'for jquery animation',////

    pauseOnHover: true,

    speed: 250, //ms'
    auto: true,
    loop: true,
    slideEndAnimation: true,
    pause: 2000,

    // keyPress: true,

    enableTouch: true,
    enableDrag: true,
    freeMove: true,
    swipeThreshold: 40,

    responsive: [
      {
        breakpoint: 800,
        settings: {
          item: 3,
          slideMove: 1,
          slideMargin: 6,
        },
      },
      {
        breakpoint: 480,
        settings: {
          item: 2,
          slideMove: 1,
        },
      },
    ],
  });
});
