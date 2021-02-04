const { Router } = require('express');
const { sendReply, reportError } = require('../utils/response');
const mainController = require('../controllers');

const router = Router();

router.post('/register', async (req, res) => {
  try {
    const response = await mainController.registerNewUser(req.body);
    return res.status(200).send(sendReply(1, response.message, response.data));
  } catch (e) {
    reportError('Error in register new user', e);
    return res.status(500).send(sendReply(0, e.message, e));
  }
});

router.post('/login', async (req, res) => {
  try {
    const response = await mainController.authLogin(req, res);
    res.cookie('userToken', response.userToken);
    res.cookie('profileID', response.profileID);
    return res.status(200).send(sendReply(1, 'User is logged in', response));
  } catch (e) {
    reportError('Error in login', e);
    return res.status(500).send(sendReply(0, e.message, e));
  }
});

router.delete('/logout', async (req, res) => {
  try {
    const response = await mainController.authLogout(req.headers);
    return res.status(200).send(sendReply(1, response.message));
  } catch (e) {
    reportError('Error in logout', e);
    return res.status(500).send(sendReply(0, e.message, e));
  }
});

module.exports = router;
