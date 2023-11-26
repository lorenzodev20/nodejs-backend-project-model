'use strict'
const userRepository = require('../repositories/userRepository');
const getAllUsers = async () => {
    return await userRepository.getAllUsers();
 }
const getUserById = async (id) => { }
const createUser = async (user) => { }
const updateUser = async (id, userData) => { }
const deleteuser = async (id) => { }

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteuser
}