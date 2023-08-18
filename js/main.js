$(document).ready(function() {
    
    $('#click-button').click(function(){
        $(this).css('background-color', 'green');
    });

    //funkcja strzałkowa zmienia sens slowa this, to nie odwołanie do obiektu przycisku, tylko całego dokumentu!
    $('#click-button').click((e)=> {
        //zamiast 'this' dajemy 'e.target'-na nim zostało wywołane zdarzenie
        //$(this).css('color', 'yellow'); -nie dziala
        $(e.target).css('color', 'yellow');
    });
});
