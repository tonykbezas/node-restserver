const express = require('express');


const app = express();
const bodyParser = require('body-parser');
require('./config/config')



const mongoose = require('mongoose');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(require('./routes/usuario'));

mongoose.connect(process.env.URLDB, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
    (err, res) => {

        if (err) throw err;

        console.log('Base de datos ONLINE!');
    });

app.listen(process.env.PORT, () => {
    console.log("Escuchando en el puerto", process.env.PORT);
});