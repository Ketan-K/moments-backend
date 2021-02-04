const { jwtVerify, jwtSign } = require('../utils/index');

const verifyJWT = (token, publicKey, options) => jwtVerify(token, publicKey, options);
const signJWT = (payload, privateKey, expiresIn, algorithm) => jwtSign(payload, privateKey, expiresIn, algorithm);

module.exports = {
  verifyJWT,
  signJWT
}