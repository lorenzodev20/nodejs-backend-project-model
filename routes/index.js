'use strict'

const { Router } = require('express');
const router = Router();
const userRoutes = require('./user.routes');

router.use('/api/v1/users', userRoutes);

module.exports = router;

