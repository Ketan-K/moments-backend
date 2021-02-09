const { Router } = require('express');
const { sendReply, reportError } = require('../utils/response');
const mainController = require('../controllers');

const router = Router();

router.post('/', async (req, res) => {
  try {
    const params = { token: res.locals.newToken, params: req.body };
    const response = await mainController.addMoment(params);
    return res.status(200).send(sendReply(1, 'Added moment', response));
  } catch (e) {
    reportError('Error in add new moment', e);
    return res.status(500).send(sendReply(0, e.message, e));
  }
});

router.get('/:maxDoc/:pageNo', async (req, res) => {
  try {
    const params = { token: res.locals.newToken, page: req.params.pageNo, maxDoc: req.params.maxDoc }
    const response = await mainController.getMomentPage(params);
    return res.status(200).send(sendReply(1, 'Moments list', response));
  } catch (e) {
    reportError('Error in get moments list', e);
    return res.status(500).send(sendReply(0, e.message, e));
  }
});

router.put('/', async (req, res) => {
  try {
    const response = await mainController.updateMoment(req.body);
    return res.status(200).send(sendReply(1, 'Moment Updated', response));
  } catch (e) {
    reportError('Error in update moment', e);
    return res.status(500).send(sendReply(0, e.message, e));
  }
});

router.delete('/:momentID', async (req, res) => {
  try {
    const response = await mainController.deleteMoment({ momentID: req.params.momentID });
    return res.status(200).send(sendReply(1, 'Moment deleted', response));
  } catch (e) {
    reportError('Error in delete moment', e);
    return res.status(500).send(sendReply(0, e.message, e));
  }
});

module.exports = router;
