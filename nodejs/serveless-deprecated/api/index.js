
const express = require('express');
const mongoose = requiere('mongoose');
const bodyParser =  require('body-parser');
const cors = require('cors');

const app = express();

//Es un metodo que nos permite agregar funcionalidades al servidor
app.use(bodyParser.json());
app.use(cors());

//creando conexión con la BD
mongoose.connect(process.env.MONGO_URI, { userNewUrlParser: true, useUnifiedTopology: true});


app.get('*', (req,res) => {
  res.send('test');
})
module.exports = app
