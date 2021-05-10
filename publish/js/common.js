/**
* --------------------------------
* Common JS
 * creator : chowoobin
* --------------------------------
*/
var fn = (function() {
	"use strict";

	return {
		//popup
		popupOpen : function(obj){
			$(obj).show();
		},
		popupClose : function(obj){
			$(obj).hide();
		},
		swiperFractionNumber : function(obj){
			var current = (Number($(obj).find(".swiper-pagination-current").text())<10) ? "0" + $(obj).find(".swiper-pagination-current").text() : Number($(obj).find(".swiper-pagination-current").text()) ;
			var total = (Number($(obj).find(".swiper-pagination-total").text())<10) ? "0" + $(obj).find(".swiper-pagination-total").text() : Number($(obj).find(".swiper-pagination-total").text()) ;
			$(obj).find(".swiper-pagination-current").text(current);
			$(obj).find(".swiper-pagination-total").text(total);
			console.log(current);
		},
	}
})();

$(window).on("load", function(){
	//header logo-list
	$(document).on("click", "#header .logo-list", function(){
		if($(this).closest(".logo-list").hasClass("open")){
			$("#header .logo-list").removeClass("open");
		} else{
			$("#header .logo-list").addClass("open");
		}
	});
	$(document).on("click", function(event){
		if($(event.target).closest(".logo-list").length === 0){
			$("#header .logo-list").removeClass("open");
		}
		event.stopPropagation();
	});

	//header fixed
	var bool = true;
	$(window).on("scroll", function(){
		if(bool){
			if($(window).scrollTop() > $("body").offset().top){
				if(!$("#header").hasClass("fixed")){
					$("#header").addClass("fixed");
				}
			} else{
				$("#header").removeClass("fixed");
			}
		}
	});
	
	// lnb 메뉴
	$("#lnb .depth1").on("click", function(){
		if($(this).closest("li").hasClass("active")){
			//$(this).siblings(".inner-menu").slideUp();
			$(this).closest("li").removeClass("active");
		}else{
			//$(".inner-menu").slideUp();
			//$(this).siblings(".inner-menu").slideDown();
			$(this).closest("li").addClass("active").siblings().removeClass("active");
		}
	});
	$("#lnb .inner-menu a").on("click", function(){
		$("#lnb .inner-menu li").removeClass("active");
		$(this).closest("li").addClass("active");
	});

	//input[type="file"]
	var fileTarget = $("input[type='file']"); 
	fileTarget.on("change", function(){ // 값이 변경되면
		$filename = $(this).val();
		$(this).siblings(".upload-name").val($filename);
	});

	//datepicker
	$.datepicker.setDefaults({
		dateFormat: 'yy-mm-dd',	//날짜 포맷이다. 보통 yy-mm-dd 를 많이 사용하는것 같다.
		prevText: '이전 달',	// 마우스 오버시 이전달 텍스트
		nextText: '다음 달',	// 마우스 오버시 다음달 텍스트
		closeText: '닫기', // 닫기 버튼 텍스트 변경
		currentText: '오늘', // 오늘 텍스트 변경
		monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],	//한글 캘린더중 월 표시를 위한 부분
		monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],	//한글 캘린더 중 월 표시를 위한 부분
		dayNames: ['일', '월', '화', '수', '목', '금', '토'],	//한글 캘린더 요일 표시 부분
		dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],	//한글 요일 표시 부분
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],	// 한글 요일 표시 부분
		showMonthAfterYear: true,	// true : 년 월	false : 월 년 순으로 보여줌
		yearSuffix: '년',	//
		showButtonPanel: true,	// 오늘로 가는 버튼과 달력 닫기 버튼 보기 옵션
	});

	//selectbox
	$(document).on("click", ".selectbox", function(event){
		$(".selectbox").not($(this)).removeClass("open");
		$(this).toggleClass("open");
	});
	//Close when clicking outside
	$(document).on("click", function(event){
		if ($(event.target).closest(".selectbox").length === 0){
			$(".selectbox").removeClass("open");
		}
		event.stopPropagation();
	});

});


