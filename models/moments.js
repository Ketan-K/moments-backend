const momentSchema = require('./db/moments');
const dbModel = require('./index');

const saveMoment = (params) => dbModel.save(momentSchema, params);

const getMomentPage = async ({ profileID }, options) => dbModel.findWithOptions(momentSchema, { profileID }, options);

const getCount = (query) => dbModel.countDocuments(momentSchema, query);

const updateMoment = ({ momentID, imageUrl, title, tags }) => dbModel.findOneAndUpdate(momentSchema, { momentID }, { imageUrl, title, tags });

const deleteMoment = ({ momentID }) => dbModel.deleteOne(momentSchema, { momentID });

module.exports = {
    saveMoment,
    getMomentPage,
    getCount,
    updateMoment,
    deleteMoment
}