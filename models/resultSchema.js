import mongoose from "mongoose";

const {Schema} = mongoose;

const resultModel = new Schema({
    username : {
        type : String,
    },
    result : {
        type : Array,
        default : []
    },
    attempts : {
        type : Number,
        default : 0
    },
    points : {
       type : Number,
       default : 0
    },
    passFail : {
        type : String,
        default : ''
    }
})

export const Result = mongoose.model('Result',resultModel)