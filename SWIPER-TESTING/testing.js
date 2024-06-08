
      var swiper = new Swiper(".mySwiper", {
        slidesPerView: 3,
        spaceBetween: 0,
        freeMode: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            480: {
              slidesPerView: 1,
              
            },
            1290: {
              slidesPerView: 2,
              
            },
            1800: {
              slidesPerView: 3,
              
            },
            
          },
      })
