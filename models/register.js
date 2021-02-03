const { createHash, jwtVerify, jwtSign } = require('../utils/index');
const UserSchema = require('./db/userData');

const saveUserDetails = async (params) => {
  const user = new UserSchema(params);
  user.profileID = createHash(user.hashPassword(Date.now()));
  user.password = user.hashPassword(params.password);
  return user.save();
};

const verifyJWT = (token, publicKey, options) => jwtVerify(token, publicKey, options);
const signJWT = (payload, privateKey, expiresIn, algorithm) => jwtSign(payload, privateKey, expiresIn, algorithm);

module.exports = {
  saveUserDetails,
  verifyJWT,
  signJWT
}