const express = require('express')
const request = require('request');
const app = express()

// URL del backend que hará el trabajo de cantar el numero
const endpoint = process.env.ENDPOINT

// ubicacion y motor de templates
app.set('views', './views');
app.set('view engine', 'pug');

// Defino el index
app.get('/', function (req, res) {
    let numero = req.query.numero;
	let numero2 = req.query.numero2;
    if (numero != undefined && numero >= 0) {
        let path = endpoint + numero + '&' + numero2;
        console.log('Consultando backend', path);
        request(path, function(error, response, body) {
            if (error) console.error('error:', error);
            res.render('index', { nombre: body, numero: numero, numero2: numero2 });
        });
    } else {
        res.render('index');
    }
})

// inicio servidor
app.listen(3000, function () {
  console.log('Listening on port 3000!')
})
