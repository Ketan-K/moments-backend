const momentSchema = require('./db/moments');
const dbModel = require('./index');

const saveMoment = (params) => dbModel.save(momentSchema, params);

const getAllMoment = ({ profileID }) => dbModel.find(momentSchema, { profileID });

module.exports = {
    saveMoment,
    getAllMoment
}