module.exports.schemas = {
    userName:{
        type:String,
        required: true
    },
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    password:{
        type:String,
        required:true,
    },
    role: {
        type: String,
        default:'MERCHANT',
        enum: ['USER', 'MERCHANT', 'ADMIN']
    },
    users : [
        {type: mongoose.Schema.Types.ObjectId,ref:'User'}
    ]
}