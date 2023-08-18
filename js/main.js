$(document).ready(function() {
    
    const heading = $('h1');

    $('.animate').click(function(){
        heading.animate({opacity: 0.3, fontSize: '3em'}, 3000, function(){
            $(this).after('<p>Animacja zakończona</p>');
            //this odwoluje się do obiektu 'heading', na ktorym dziala funkcja (tego wyzej!)
        })
    });
});