const { model, Schema } = require('mongoose');

const momentSchema = new Schema({
    momentID: {
        type: String,
        required: true,
        index: { unique: true }
    },
    imageUrl: {
        type: String,
    },
    title: {
        type: String,
        index: true
    },
    tags: {
        type: [String],
        index: true,
    },
    profileID: {
        type: String,
        required: true,
        index: true
    }
},
    {
        collection: 'moments',
        versionKey: false,
        timestamps: true
    }
);


const UserData = model('moments', momentSchema);

module.exports = UserData;
