const authModel = require('../models/auth');

const login = async (params) => {
  const { email, password } = params;
  const user = await authModel.userByEmail(email);
  if (!user) throw new Error('Login attempt failed');
  const hasPasswordMatched = user.matchPassword(password, user.password);
  if (!hasPasswordMatched) throw new Error('Login attempt failed');
  const userToken = await authModel.signJWT(user.profileID, process.env.JWT_SECRET, '24h');
  return {
    message: 'User logged in', userToken, profileID: user.profileID, user
  };
};

module.exports = {
  login,
}

