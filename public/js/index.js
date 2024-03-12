AOS.init({startEvent: 'load'});
window.addEventListener('load', AOS.refresh);

$(".header_menu").click(function(){
    $(this).toggleClass("active");
    $(".header_list").toggleClass("active");
})

$(".qa_q").click(function(){
    $(this).toggleClass("active");
    $(this).parents(".qa_item").find(".qa_a").slideToggle(300);
})

$(".qa_search_btn").click(function(){
    if(!$(this).parents(".qa_search-wrap").hasClass("active")) {
        $(this).parents(".qa_search-wrap").addClass("active");
    }
})

$(".qa_search_close").click(function(){
    $(this).parents(".qa_search-wrap").removeClass("active");
})

$(".gotoelement").click(function(){
    let target = $(this).data("target");
    let top = $(target).offset().top - 60;
    $("html, body").animate({scrollTop:top},300);
    $(".header_list").removeClass("active");
    $(".header_menu").removeClass("active");
})

