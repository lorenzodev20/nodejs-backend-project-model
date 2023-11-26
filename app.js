'use strict'
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();

// Cargar archivo de Rutas
const allRoutes = require('./routes/index');

// Middlewares
app.use(bodyParser.urlencoded({ extended:false}));
app.use(bodyParser.json());

// Cors
app.use(cors());

// rutas
app.use(allRoutes)

module.exports = app;