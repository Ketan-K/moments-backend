const { sign, verify, decode } = require('jsonwebtoken');
const crypto = require('crypto');

const jwtSign = async (payload, privateKey, expiresIn) => sign(
  { payload }, privateKey, { expiresIn },
);

const jwtVerify = async (userToken, publicKey, options) => new Promise((resolve, reject) => {
  verify(userToken, publicKey, options, async (err) => {
    if (err && err.name === 'TokenExpiredError') {
      const response = await jwtSign(getProfileIDFromToken(userToken).profileID, process.env.JWT_SECRET, '24h', 'RS256');
      return resolve(response);
    }
    return err ? reject(err) : resolve(userToken);
  });
});

const createHash = (id) => crypto.createHash('md5').update(id).digest('hex');

const getProfileIDFromToken = (token) => {
  const { payload } = decode(token);
  return { profileID: payload };
};

module.exports = {
  jwtSign,
  jwtVerify,
  createHash,
  getProfileIDFromToken
}