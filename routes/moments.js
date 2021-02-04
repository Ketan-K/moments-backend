const { Router } = require('express');
const { sendReply, reportError } = require('../utils/response');
const mainController = require('../controllers');

const router = Router();

router.post('/', async (req, res) => {
  try {
    const params = { token: res.locals.newToken, params: req.body };
    const response = await mainController.addMoment(params);
    return res.status(200).send(sendReply(1, response.message, response.data));
  } catch (e) {
    reportError('Error in add new moment', e);
    return res.status(500).send(sendReply(0, e.message, e));
  }
});

router.get('/', async (req, res) => {
  try {
    const params = { token: res.locals.newToken }
    const response = await mainController.getAllMoment(params);
    return res.status(200).send(sendReply(1, response.message, response.data));
  } catch (e) {
    reportError('Error in get moments list', e);
    return res.status(500).send(sendReply(0, e.message, e));
  }
});

// router.put('/', async (req, res) => {
//   try {
//     const response = await mainController.addMoment(req.body);
//     return res.status(200).send(sendReply(1, response.message, response.data));
//   } catch (e) {
//     reportError('Error in update moment', e);
//     return res.status(500).send(sendReply(0, e.message, e));
//   }
// });

router.delete('/', async (req, res) => {
  try {
    const response = await mainController.deleteMoment(req.body);
    return res.status(200).send(sendReply(1, response.message, response.data));
  } catch (e) {
    reportError('Error in delete moment', e);
    return res.status(500).send(sendReply(0, e.message, e));
  }
});

module.exports = router;
