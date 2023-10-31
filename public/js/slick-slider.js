// JavaScript Document

//設計の取り組み
$(function() {
    $('.carousel-slider').slick({
          infinite: true,
          dots:false,
          slidesToShow: 3,
          slidesToScroll: 3,
          responsive: [{
               breakpoint: 768,
                    settings: {
                         slidesToShow: 3,
                         slidesToScroll: 3,
               }
          },{
               breakpoint: 480,
                    settings: {
                         slidesToShow: 2,
                         slidesToScroll: 2,
                    }
               }
          ]
     });
});