const mongoose = require('mongoose')

const RoomSchema = new mongoose.Schema({

    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'user'
    }
    ,
    roomName:{
        type: String,
        required: true
    },
    askStatus:{
        type: Boolean,
        default: true
    },
    feedbackStatus:{
        type: Boolean,
        default: true
    },
    user:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref: 'user',
            default: []
        }
    ]
})
module.exports = Room = mongoose.model('room',RoomSchema);