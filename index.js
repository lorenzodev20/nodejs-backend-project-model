'use strict'
const debug = require('debug')('app:index');
const app = require('./app');

const PORT = process.env.PORT ?? 3000;

app.listen(PORT, () => {
  debug(`Servidor escuchando en el puerto ${PORT}`);
});