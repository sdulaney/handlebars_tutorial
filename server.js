var express = require('express');

var app = express();

app.set('view engine', 'hbs');

app.get('/', (request, response) => {
    response.render('home', {
        title: 'Stewart Dulaney\'s Website',
        content: 'Hello World!',
        people: [
            'Joe Bruin',
            'Josie Bruin',
            'Zaddy Block'
        ]
    });
});

app.listen(3000, function() {
    console.log('App listening on port 3000!');
});
