const authModel = require('../models/auth');

const login = async (params) => {
  const { email, password } = params;
  const user = await authModel.userByEmail(email);
  if (!user) throw new Error('Login attempt failed');
  const hasPasswordMatched = user.matchPassword(password, user.password);
  if (!hasPasswordMatched) throw new Error('Login attempt failed');
  const authToken = await authModel.signJWT(user.profileID, process.env.JWT_SECRET, '24h');
  const { profileID, firstname, lastname, mobile, city } = user;
  return { authToken, profileID, firstname, lastname, email, mobile, city }
};

module.exports = {
  login,
}

