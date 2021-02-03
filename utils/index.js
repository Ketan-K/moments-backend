const { sign, verify } = require('jsonwebtoken');
const crypto = require('crypto');

const jwtSign = async (payload, privateKey, expiresIn, algorithm) => sign(
  { payload }, privateKey, { expiresIn, algorithm },
);

const jwtVerify = async (token, publicKey, options) => verify(token, publicKey, options);

const createHash = (id) => crypto.createHash('md5').update(id).digest('hex');

module.exports = {
  jwtSign,
  jwtVerify,
  createHash
}