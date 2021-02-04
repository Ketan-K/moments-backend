const { Router } = require('express');
const { sendReply, reportError } = require('../utils/response');
const uploadFile = require('../middleware/multer');

const router = Router();

router.post('/', uploadFile.single('file'), async (req, res) => {
    try {
        if (req.file == undefined) {
            return res.status(500).send(sendReply(0, "Please upload a file!"));
        }
        let imageUrl = `${req.protocol}://${req.headers.host}/${req.file.filename}`;
        return res.status(200).send(sendReply(1, 'Uploaded', imageUrl));
    } catch (e) {
        reportError('Error in add new moment', e);
        return res.status(500).send(sendReply(0, e.message, e));
    }
});

module.exports = router;