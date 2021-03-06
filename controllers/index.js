const authController = require('./auth');
const registerController = require('./register');
const momentsController = require('./moments');
const { getProfileIDFromToken } = require('../utils/');

const authLogin = (params) => authController.login(params);
const authLogout = (params) => authController.logout(params);
const registerNewUser = (params) => registerController.newUserRegistration(params);

const addMoment = ({ token, params }) => momentsController.addMoment({ ...getProfileIDFromToken(token), ...params });
const getMomentPage = ({ token, page, maxDoc }) => momentsController.getMomentPage(getProfileIDFromToken(token), page, maxDoc);
const updateMoment = (params) => momentsController.updateMoment(params);
const deleteMoment = (params) => momentsController.deleteMoment(params);

module.exports = {
    authLogin,
    authLogout,
    registerNewUser,
    addMoment,
    getMomentPage,
    updateMoment,
    deleteMoment
}