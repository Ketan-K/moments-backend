const { jwtVerify, jwtSign } = require('../utils/index');
const UserSchema = require('./db/userData');
const dbModel = require('./index');

const userByEmail = async (email) => dbModel.findOne(UserSchema, { email });
const verifyJWT = (token, publicKey, options) => jwtVerify(token, publicKey, options);
const signJWT = (payload, privateKey, expiresIn, algorithm) => jwtSign(payload, privateKey, expiresIn, algorithm);

module.exports = {
  verifyJWT,
  signJWT,
  userByEmail
}