$(function() {
    $('p').css('background-color', 'pink');

    $('a').css({
        'textDecoration': 'none',
        'color': 'red',
        'font-size': 20 //'2em'

    });

    $('h2').text('New heading text');

    $('p').eq(0).html('Lorem <span>ipsum</span>');

    $('#name').val('Nela');

    $('.list-item').each(function(index){
        $(this).css('margin-left', index * 10 + 'px');
        //this- obiekt dom na ktorym konktretnie jest przeprowadzone działanie
    });
});