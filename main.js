const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index', {
    text: 'Iniciando com NodeJs',
    data: '27/07/22'
  });
})

app.get('/sobre', function(request, response) {
  response.render('pages/sobre');
})

app.get('/paginas', function(request, response) {
  response.render('pages/sobre');
})

app.get('/contato2', function(request, response) {
  response.render('pages/sobre');
})

app.listen(8000, function() {
  console.log('Server is Run - port:8000');
});
