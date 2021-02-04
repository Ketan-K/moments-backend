const momentsModel = require('../models/moments');
const createHash = require('../utils/index');

const addMoment = async (params) => {
    const newParams = { ...params, momentID: createHash(new Date()) };
    return momentsModel.saveMoment(newParams);
}
const getAllMoment = async ({ profileID }) => momentsModel.getAllMoment({ profileID });
// const updateMoment = async ({ params }) => momentsModel.updateMoment(params);
const deleteMoment = async ({ momentID }) => momentsModel.deleteMoment({ momentID });

module.exports = {
    addMoment,
    getAllMoment,
    // updateMoment,
    deleteMoment
}