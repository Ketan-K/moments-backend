const registerModel = require('../models/register');

const newUserRegistration = async (params) => registerModel.saveUserDetails(params);

module.exports = {
  newUserRegistration
}