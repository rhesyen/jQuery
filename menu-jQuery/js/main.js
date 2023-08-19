$(document).ready(function() {
    $('.hamburger').click(function() {
        $('.main-menu').toggleClass('open'); 
        //toggle dodaje klasę jak jej nie ma, usuwa jak jest!
    });

    $('.main-menu-item a').click(function(e) {
        e.preventDefault();
        $('body').fadeOut(2000, function() {
            window.location.href = $(e.target).attr('href');
            //zwraca wartosc atrybutu o nazwie 'href' klikniętego obiektu 'e'
        });
    });
});