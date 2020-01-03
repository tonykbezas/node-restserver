const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./config/config')
    // parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/usuario', function(req, res) {
    res.json("get Mundo!");
});

app.post('/usuario', function(req, res) {
    let body = req.body;
    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: "el nombre es necesario"
        });
    } else {
        res.json({
            usuario: body
        });
    }

});

app.put('/usuario/:id', function(req, res) {
    let id = req.params.id
    res.json({
        cedula: id
    });
});

app.delete('/usuario', function(req, res) {
    res.json("delete Mundo!");
});

app.listen(process.env.PORT, () => {
    console.log("Escuchando en el puerto ", process.env.PORT)
})