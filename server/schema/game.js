const {model,Schema,Types} = require('mongoose')

const schema = new Schema({
    gameid: {
        type: String,
        required: true
    },
    users: [
        {
            name: {type: String, required: true},
            userid: {type: String, required: true}
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
    }
})

module.exports = model('Game',schema)