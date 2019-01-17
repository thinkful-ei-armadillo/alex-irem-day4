'use strict';

function main() {
    $('#number-chooser').submit(event => {
        event.preventDefault();
        const countTo = parseInt($(event.currentTarget).find('#number-choice').val());
        const replyArray = [];

        for (let i = 1; i <= countTo; i++) { 
            if (i % 3 === 0 && i % 5 === 0) {
                replyArray.push('fizzbuzz')
            } else if (i % 3 === 0) {
                replyArray.push('fizz');
            } else if (i % 5 === 0) {
                replyArray.push('buzz');
            } else {
                replyArray.push(i);
            }
        }

        replyArray.forEach(reply => {
            $('div.js-results').append(`
                <div class="fizz-buzz-item">
                    <span>${reply}</span>
                </div>`
            );
        });
    });
}

$(main);