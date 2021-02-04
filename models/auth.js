const dbModel = require('./index');
const UserSchema = require('./db/userData');
const userTokenSchema = require('./db/userToken');
const { jwtVerify, jwtSign } = require('../utils/index');

const findToken = async (query) => dbModel.findOne(userTokenSchema, query);

const updateUserToken = async (userToken, profileID) => {
  await dbModel.findOneAndUpdatewithOptions(userTokenSchema, { profileID },
    { userJWT: userToken }, { upsert: true });
  return 'User token updated';
};

const deleteToken = async (userToken) => dbModel.deleteOne(userTokenSchema, { userJWT: userToken });
const verifyJWT = (token, publicKey, options) => jwtVerify(token, publicKey, options);
const signJWT = (payload, privateKey, expiresIn, algorithm) => jwtSign(payload, privateKey, expiresIn, algorithm);

module.exports = {
  findToken,
  updateUserToken,
  deleteToken,
  verifyJWT,
  signJWT
}