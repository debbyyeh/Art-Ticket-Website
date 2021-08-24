"use strict";

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 0,
  // direction: "horizonital",
  // speed: 1000,
  // loop: true,
  // autoplay: {
  //     delay: 1000,
  //     // 手動滑動後，想要繼續自動輪播
  //     disableOnInteraction: false,
  // },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    }
  }
});
//# sourceMappingURL=all.js.map
