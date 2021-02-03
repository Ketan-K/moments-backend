module.exports = {
  save: (Model, params) => {
    const data = new Model();
    Object.keys(params).forEach((key) => {
      data[key] = params[key];
    });
    return data.save();
  },
  find: (Model, query) => Model.find(query),
  findWithLimit: (Model, query, limit) => Model.find(query).limit(limit),
  findOne: (Model, query) => Model.findOne(query),
  findWithFilter: (Model, query, filter) => Model.find(query, filter),
  findOneWithFilter: (Model, query, filter) => Model.findOne(query, filter),
  findOneAndUpdate: (Model, query, updates) => Model.findOneAndUpdate(
    query, updates,
  ),
  findOneAndUpdatewithOptions: (
    Model, query, updates, options,
  ) => Model.findOneAndUpdate(
    query, updates, options,
  ),
  deleteOne: (Model, query) => Model.deleteOne(query),
  aggregate: (Model, query) => Model.aggregate(query),
  countDocuments: (Model, query) => Model.countDocuments(query)
}
