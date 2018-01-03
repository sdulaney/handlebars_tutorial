var express = require('express');

var app = express();

// TODO - Include Handlebars

app.get('/', (request, response) => {
    // TODO - Render the home page.
});

app.listen(3000, function() {
    console.log('App listening on port 3000!');
});
