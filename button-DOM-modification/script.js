$(document).ready(function() {

    $('.first').click(function() {
      let lastElement = $('li:last-child');
      $('ul').prepend(lastElement);
    });
  
    $('.last').click(function() {
      let firstElement = $('li:first-child');
      $('ul').append(firstElement);
    });
  });