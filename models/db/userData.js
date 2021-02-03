const { model, Schema } = require('mongoose');
const { hashSync, genSaltSync, compareSync } = require('bcrypt');

const UserDataSchema = new Schema({
  email: {
    type: String,
    required: true,
    index: true
  },
  password: {
    type: String,
    required: true,
  },
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  profileID: {
    type: String,
    required: true,
    index: { unique: true }
  },
  city: {
    type: String,
    required: true,
  }
},
  {
    collection: 'UserData',
    versionKey: false,
  });

UserDataSchema.methods.hashPassword = (password) => hashSync(
  password, genSaltSync(10),
);

UserDataSchema.methods.matchPassword = (password, hash) => {
  try {
    return compareSync(password, hash);
  } catch (error) {
    return false;
  }
};

const UserData = model('UserData', UserDataSchema);

module.exports = UserData;
