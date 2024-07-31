$(function(){
    $(".main_menu >li").hover(function(){
    var n= $(this).index()
    l= n * 200+"px";
    console.log(n)
    console.log(l)

    $(".target").addClass("on").animate({left:l},150)

    },function(){
        $(".target").removeClass("on")
    })

    $(".main_menu>li").hover(function(){
        $(this).find(".sub").stop().slideDown()
    },function(){
        $(".sub").stop().slideUp()
    })
    
    $(".fade").slick({
        autoplay:true  
        })
})