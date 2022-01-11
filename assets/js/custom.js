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
        perPage: 1,
        gap: "0.7rem",
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
});
