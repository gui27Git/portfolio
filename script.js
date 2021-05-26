$(document).ready(function() {
    if ($(window).width() > 992) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 35) {
                $('.navbar').css('background-color', 'gray');
                $('.navbar').css('opacity', '0.5');
            } else {
                $('.navbar').css('opacity', '1');
                $('.navbar').css('background-color', 'transparent');
            }
        });
    }
    $(".filters .btn").click(function() {
        if ($(this).hasClass("stage")) {
            $(".btn").removeClass("active");
            $(this).addClass("active");

            $(".card-realisation").show("fast");
            $(".card-realisation.bts").hide("fast");
        } else if ($(this).hasClass("bts")) {
            $(".btn").removeClass("active");
            $(this).addClass("active");
            $(".card-realisation").show("fast");
            $(".card-realisation.stage").hide("fast");
        } else {
            $(".btn").removeClass("active");
            $(this).addClass("active");
            $(".card-realisation").show("fast");
        }
    });
});