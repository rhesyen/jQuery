/* standardowe rozpoczęcie pracy na obiekcie document
skrócony zapis document.ready */
$(function() {
    const section = $('#about');
    //console.log(section);

    const listItems  = $('.list-item');
    //console.log(listItems);

    //drugi z kolei list-item:
    const secondItem  = $('.list-item:nth-of-type(2)');
    //console.log(secondItem);

    const links = $('a[title="See more"]');
    //console.log(links);

    //tylko potomkowie h2 obiektów section:
    const headingInSection = $('section h2');
    //console.log(headingInSection);

    //referencja do istniejacego obiektu z modelu DOM
    const documentObj = $(document);
    //console.log(documentObj);

    //---------odwolanie do konkretnych elementow listy za pomocą metod jQuery:
    const fifthItem = $('.list-item').eq(4); //.first(); / .last();
    //console.log(fifthItem);

    const paragraphNotDescription = $('p').not('.description');
    //console.log(paragraphNotDescription);

    const linksInSection = $('section').find('a');
    //console.log(linksInSection);

    //---------relacje w dokumencie DOM jQuery:
    const linkParents = $('a').parent();
    //console.log(linkParents);

    const sectionChildren = $('section').children();
    //console.log(sectionChildren);

    const elementAfterDesciption = $('.description').next(); //.prev();
    //console.log(elementAfterDesciption);

    //---------dodawanie elementów w dokumencie DOM jQuery:
    const newLi = $('<li class="list-item">New item</li>');
    //dodanie newLi do struktury:

    //wewnątrz znacznika:
    $('ul').prepend(newLi); //na początku  listy
    $('ul').append('<li class="list-item">Last item</li>'); //na końcu listy

    //przed/po znaczniku:
    $('ul').before('<h3>Lista</h3>');
    const newFooter = $('<footer>Autor: Jan Kowalski</footer>');
    $('ul').after(newFooter);

    //czyszczenie znacznika:    
    $('h2').empty();

    //usuwanie:
    $('.content').remove();
});