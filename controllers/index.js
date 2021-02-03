const authController = require('./auth');
const registerController = require('./register');

const authLogin = async (params) => authController.login(params);
const authLogout = async (params) => authController.logout(params);
const registerNewUser = async (params) => registerController.newUserRegistration(params);

module.exports = {
    authLogin,
    authLogout,
    registerNewUser
}