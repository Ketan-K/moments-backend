const { sendReply, reportError } = require('../utils/response');
const { jwtVerify } = require('../utils/index');

module.exports = async (req, res, next) => {
  const { userToken, profileID } = req.cookies;
  try {
    if (!userToken) {
      return res.status(401).send(sendReply(0, 'Token not provided'));
    }
    const newToken = await jwtVerify(userToken, process.env.JWT_SECRET, { algorithm: 'RS256' });
    res.locals.newToken = newToken;
    res.cookie('userToken', newToken);
    return next();
  } catch (error) {
    return res.send(reportError(error.message, error));
  }
};
