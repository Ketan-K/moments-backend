const { model, Schema } = require('mongoose');

const userTokenSchema = new Schema({
  profileID: String,
  userJWT: String,
},
{
  collection: 'userToken',
  versionKey: false,
});

const userToken = model('userToken', userTokenSchema);

module.exports = userToken;
