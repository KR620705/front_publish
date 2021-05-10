/**
* --------------------------------
* sub JS
* --------------------------------
*/

$(window).on('load', function(){
    //gnbswiper (탭 4개 이상 swipe)
    var gnbTotalLeng = $(".gnbswiper .swiper-slide").length;
    console.log(gnbTotalLeng);
    if (gnbTotalLeng == 2) {
        $(".gnbswiper").addClass("two");
    } else if (gnbTotalLeng == 3) {
        $(".gnbswiper").addClass("three");
    } else if (gnbTotalLeng > 3) {
        var gnbActiveNum = $(".gnbswiper .swiper-slide.active").index();
        var gnbswiper = new Swiper(".gnbswiper", {
            slidesPerView: "auto",
            initialSlide: gnbActiveNum
        });
    }
});
