const momentsModel = require('../models/moments');
const { createHash } = require('../utils/index');

const addMoment = async (params) => {
    const newParams = { ...params, momentID: createHash() };
    return momentsModel.saveMoment(newParams);
}
const getMomentPage = async ({ profileID }, page, maxDoc) => {
    const [count, result] = await Promise.all(
        [
            momentsModel.getCount({ profileID }),
            momentsModel.getMomentPage({ profileID }, { skip: (page * maxDoc), limit: Number(maxDoc), sort: { createdAt: -1 } })
        ])
    return { count, result }
}
const updateMoment = async (params) => momentsModel.updateMoment(params);

const deleteMoment = async ({ momentID }) => momentsModel.deleteMoment({ momentID });

module.exports = {
    addMoment,
    getMomentPage,
    updateMoment,
    deleteMoment
}