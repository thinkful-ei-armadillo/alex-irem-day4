'use strict';

function main(){

  $('.thumbnail').click(event => {
    const grabImg = $(event.currentTarget).children();
    $('.hero img').attr({'src':grabImg.attr('src'), 'alt':grabImg.attr('alt'),});
  });
}

$(main);