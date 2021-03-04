$(document).ready(function() {
    if ($(window).width() > 992) {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 35) {
                $('#navbar').addClass('fixed-top');
                $('#navbar').css('background-color', 'gray');
                $('#navbar').css('opacity', '0.5');
            } else {
                $('#navbar').removeClass('fixed-top');
                $('#navbar').css('opacity', '1');
                $('#navbar').css('background-color', 'transparent');
            }
        });
    }

    "use strict";
    let glowInText = document.querySelectorAll("#presentation p");
    glowInText.forEach(glowInText => {
        let letters = glowInText.textContent.split("");
        glowInText.textContent = "";
        letters.forEach((letter, i) => {
            let span = document.createElement("span");
            span.textContent = letter;
            span.style.animationDelay = `${i*0.05}s`;
            glowInText.append(span);

        })
    })
});