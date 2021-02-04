const fs = require('fs').promises ;
const { Router } = require('express');
const { sendReply, reportError } = require('../utils/response');
const uploadFile = require('../middleware/multer');

const router = Router();

router.post('/', uploadFile.single('file'), async (req, res) => {
    try {
        if (req.file == undefined) {
            return res.status(500).send(sendReply(0, "Please upload a file!"));
        }
        // let imageUrl = `${req.protocol}://${req.headers.host}/${req.file.filename}`;
        let imageUrl = req.file.filename
        return res.status(200).send(sendReply(1, 'Uploaded', imageUrl));
    } catch (e) {
        reportError('Error in add new moment', e);
        return res.status(500).send(sendReply(0, e.message, e));
    }
});

router.delete('/', async (req, res) => {
    try {
        await fs.unlink('./uploads/'+ req.body.imageUrl);
        return res.status(200).send(sendReply(1, 'Deleted'));
    } catch (e) {
        if(e.code === 'ENOENT'){
            return res.status(200).send(sendReply(1, 'Already Deleted'));
        }
        reportError('Error in add new moment', e);
        return res.status(500).send(sendReply(0, e.message, e));
    }
});

module.exports = router;