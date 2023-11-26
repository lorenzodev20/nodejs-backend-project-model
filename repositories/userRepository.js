const { User } = require('../models');

const getAllUsers = async () => {
    const users = await User.findAll();
    return users;
}

const getUserById = async (id) => {
    const user = await User.findByPk(id);
    return user;
}

const createUser = async (userData) => {
    const newUser = await User.create(userData);
    return newUser;
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}