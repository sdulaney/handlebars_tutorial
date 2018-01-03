var express = require('express');

var app = express();

app.set('view engine', 'hbs');

app.get('/', (request, response) => {
    response.render('home', {
        title: 'Stewart Dulaney\'s Website',
        content: 'Hello World!',
        people: [
            { firstName: 'Joe', lastName: 'Bruin' },
            { firstName: 'Josie', lastName: 'Bruin' },
            { firstName: 'Zaddy', middleName: 'Gene', lastName: 'Block' }
        ]
    });
});

app.listen(3000, function() {
    console.log('App listening on port 3000!');
});
