$(function() {
    //dodanie atrybutu:
    $('#about h2').attr('id', 'main-heading');

    //wartosc atrybutu 2 elementu kolekcji ('a' przy drugim p):
    let titleValue = $('a').eq(1).attr('title');
    //console.log(titleValue);

    $('section').removeAttr('id');

    $('section').addClass('main-section');

    $('.description').removeClass('description');

    //czy posiada klasę?
    console.log($('section').hasClass('main-section'));

    //przełącz klasę:
    $('p').toggleClass('content');

    //dodanie dwóch klas na raz (oddzielenie spacją):
    $('li').addClass('item ul-item');
});