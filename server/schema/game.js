const {model,Schema,Types} = require('mongoose')

const schema = new Schema({
    gameid: {
        type: String,
        required: true
    },
    users: [
        {
            name: {type: String, required: true},
            userid: {type: String, required: true},
            pts: {type: Number, default: 0},
            color: {type: String, default: '#aeaefa'}
        }
    ],
    name: {
        type: String,
        required: true
    },
    timer: {
        type: Number,
        default: 60
    },
    ownWords: {
        type: Boolean,
        default: false
    },
    playing: {
        type: Boolean,
        default: false
    },
    owner: {
        type: String,
        required: true
    }
})

module.exports = model('Game',schema)