/**
* --------------------------------
* main JS
* --------------------------------
*/

$(window).on("load", function(){
	
	//visual banner
	var $mainswiperObj = $(".mainswiper");
	if ( $mainswiperObj.length > 0 ){
		$(".mainswiper").addClass("active");
		var tot = $mainswiperObj.find(".swiper-slide").length < 10 ? "0"+$mainswiperObj.find(".swiper-slide").length : $mainswiperObj.find(".swiper-slide").length;

		//mainthumbswiper
		var mainthumbswiper = new Swiper('.mainthumbswiper', {
			slidesPerView: "auto",
			autoplay: false,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
			init: false,
		});
		mainthumbswiper.init();

		//mainswiper
		var mainswiper = new Swiper('.mainswiper', {
			loop: true,
			slidesPerView: "auto",
			autoplay: {
				disableOnInteraction: false,
			},
			//autoplay: false,
			thumbs: {
			swiper: mainthumbswiper,
			},
			init: false,
		});
		mainswiper.on("init slideChange", function(){
			var current = mainswiper.realIndex + 1;
			current = current < 10 ? "0"+current : current;
			$(".mainswiper .swiper-pagination-tot strong").text(current);
			$(".mainswiper .swiper-pagination-tot span").text(tot);
		});
		mainswiper.init();
	}
    
	/* thumbswiper 개별 선언 방식 */
    //thumbswiper
    /*
    var thumbswiper = new Swiper('#thumbswiper3', {
        slidesPerView: "auto",
        autoplay: false,
    });
    $(document).on("click", "#thumbswiper3 .btn-more", function (e) {
        e.preventDefault();
        //$(this).closest(".swiper-slide").remove();
        // thumbswiper.appendSlide([
        // 	'<li class="swiper-slide"><a href="javascript:;"><img src="https://swiperjs.com/demos/images/nature-1.jpg"></a></li>',
        // 	'<li class="swiper-slide"><a href="javascript:;"><img src="https://swiperjs.com/demos/images/nature-2.jpg"></a></li>',
        // 	'<li class="swiper-slide"><a href="javascript:;"><img src="https://swiperjs.com/demos/images/nature-3.jpg"></a></li>',
        // 	'<li class="swiper-slide"><a href="javascript:;"><img src="https://swiperjs.com/demos/images/nature-4.jpg"></a></li>',
        // 	'<li class="swiper-slide"><a href="javascript:;"><img src="https://swiperjs.com/demos/images/nature-5.jpg"></a></li>',
        // 	'<li class="swiper-slide"><a href="javascript:;" class="btn-more">더보기</a></li>',
        // ]);
    });
    */

    /* thumbswiper append 방식 */
    /*
    //thumbswiper
    var swiper;
    $(".thumbswiper").each(function(index, element){
        var $this = $(this);
        $this.addClass('instance-' + index);
        $this.attr('instance', index);

        eval("swiper"+index+"= new Swiper('.instance-' + index, {slidesPerView: 'auto',autoplay: false});");
    });

    //thumbswiper 더보기 버튼
    $(document).on("click", ".thumbswiper .btn-more", function (e) {
        e.preventDefault();
        $(this).closest(".swiper-wrapper").append(
            '<li class="swiper-slide"><a href="javascript:;"><img src="https://swiperjs.com/demos/images/nature-1.jpg"></a></li>'+
            '<li class="swiper-slide"><a href="javascript:;"><img src="https://swiperjs.com/demos/images/nature-2.jpg"></a></li>'+
            '<li class="swiper-slide"><a href="javascript:;"><img src="https://swiperjs.com/demos/images/nature-3.jpg"></a></li>'+
            '<li class="swiper-slide"><a href="javascript:;"><img src="https://swiperjs.com/demos/images/nature-4.jpg"></a></li>'+
            '<li class="swiper-slide"><a href="javascript:;"><img src="https://swiperjs.com/demos/images/nature-5.jpg"></a></li>'+
            '<li class="swiper-slide"><a href="javascript:;" class="btn-more">더보기</a></li>'
        );
        var instance = $(this).closest(".thumbswiper").attr("instance");
        $(this).closest(".swiper-slide").remove();
        eval("swiper"+instance+".update();");
    });
    */
});
