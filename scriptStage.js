$(document).ready(function () {
    if ($(window).width() > 992) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 35) {
                $('#navbar').addClass('fixed-top');
                $('#navbar').css('background-color', 'gray');
                $('#navbar').css('opacity', '0.5');
            }
            else {
                $('#navbar').removeClass('fixed-top');
                $('#navbar').css('opacity', '1');
                $('#navbar').css('background-color', 'transparent');
            }
        });
    }

    var buttonActive = document.getElementsByClassName(" btn active");
    var filterValue = $(buttonActive).attr('data-filter');
    if (filterValue == "all") {
        $(".column").show("fast");
    }
    $('.btn').click(function () {
        filterValue = $(this).attr('data-filter');
        if (filterValue == "PPE") {
            $(".column").hide("fast");
            $(".column.PPE").show("fast");
        }
        else if (filterValue == "Stage") {
            $(".column").hide("fast");
            $(".column.Stage").show("fast");
        }
        else if (filterValue == "all") {
            $(".column").show("slow");
        }
        $(buttonActive).removeClass("active");
        $(this).addClass(" active");
    });
});