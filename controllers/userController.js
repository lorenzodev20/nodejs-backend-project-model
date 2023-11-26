'use strict'
const debug = require('debug')('app:controllers:userController');
const userService = require('../services/userService');
const { sendSuccessResponse } = require('../adapters/http/sendResponse.js');

const getAllUsers = async (req, res, next) => {
    try {
        const users = await userService.getAllUsers();
        sendSuccessResponse(res, users ?? 'Not Results');
    } catch (err) {
        debug(err)
        res.status(500).send('Error al obtener la lista');
    }
}
const getUserById = async (req, res, next) => { }
const createUser = async (req, res, next) => { }
const updateUser = async (req, res, next) => { }
const deleteuser = async (req, res, next) => { }

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteuser
}