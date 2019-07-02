'use strict'

let ISBN = {};

ISBN['978 - 1 - 60309 - 452 - 8'] = 'A Letter to Jo';
ISBN['978 - 1 - 60309 - 459 - 7'] = 'Lupus';
ISBN['978 - 1 - 60309 - 444 - 3'] = 'Red Panda and Moon Bear';
ISBN['978 - 1 - 60309 - 461 - 0'] = 'The Lab';

console.log(ISBN);

Object.keys(ISBN).forEach(function (value) {
    console.log(ISBN[value] + ' (ISBN: ' + value + ')');
});

delete ISBN['978 - 1 - 60309 - 444 - 3'];

console.log(ISBN);

Object.keys(ISBN).forEach(function (key) {
    if (ISBN[key] === 'The Lab') {
        delete ISBN[key];
    }
});

console.log(ISBN);

ISBN['978-1-60309-450-4'] = 'They Called Us Enemy';
ISBN['978-1-60309-453-5'] = 'Why Did We Trust Him';

console.log(ISBN['478-0-61159-424-8']);

console.log(ISBN['978-1-60309-453-5']);
