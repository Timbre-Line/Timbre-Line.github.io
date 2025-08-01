(function($) {

    "use strict";

    var initSlider = function () {
      var swiper = new Swiper(".review-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        freemode: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1299: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        },
      });
  
    };

    $(document).ready(function(){  
        
        AOS.init({
            duration: 1200,
            once: true,
        })

        $(".youtube").colorbox({
            iframe: true,
            innerWidth: 960,
            innerHeight: 585
        });



        // document ready
        $(document).ready(function () {
          initSlider();
          headerSticky();
        }); // document ready

        

    }); // End of a document
        
})(jQuery);