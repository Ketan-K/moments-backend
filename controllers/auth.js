const authModel = require('../models/auth');

const login = async (params) => {
  const { email, password } = params;
  const user = await authModel.userByEmail(email);
  if (!user) return { message: 'Login attempt failed' };
  const hasPasswordMatched = user.matchPassword(password, user.password);
  if (!hasPasswordMatched) return { message: 'Login attempt failed' };
  const userToken = await authModel.signJWT(user.profileID, process.env.JWT_SECRET, '24h', 'RS256');
  await authModel.updateUserToken(userToken, user.profileID);
  return {
    message: 'User logged in', userToken, profileID: user.profileID, data:user
  };
};

const logout = async (params) => {
  const { authorization: userToken } = params;
  if (!userToken) return { message: 'Token not passed' };
  await authModel.deleteToken(userToken);
  return { message: 'Logout successfully' };
};

module.exports = {
  login,
  logout,
}

