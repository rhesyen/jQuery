$(document).ready(function() {

    $('.accordion-item').click(function() {

        if ($(this).hasClass('open')) {
            $(this).removeClass('open');
            $(this).find('.accordion-content').slideUp();
        } else {
            //czesto wykorzystywane, dodawanie i usuwanie klasy w JS
            $(this).addClass('open');
            $(this).find('.accordion-content').slideDown();
        }
    });
});