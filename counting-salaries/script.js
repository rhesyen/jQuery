$(document).ready(function() {
  $('#count-sum').click(function() {
    let sum = 0;
    let salaries = $('.salary').toArray();
    //console.log(salaries);

    for (let i = 0; i < salaries.length; i++) {
      let salary1 = $(salaries[i]).text();
      salary1 = parseInt(salary1);
      sum += salary1;
    };

    $('#sum').text(sum);
  });
});