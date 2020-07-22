module.exports.schemas = {
    email:{
        type: String,
        unique: true,
        required: true,
    },
    userName:{
        type:String,
        required: true
    },
    firstName:{
        type: String,
    },
    lastName:{
        type: String,
    },
    password:{
        type:String,
        required:true,
    },
    merchantId:{
        type:String,
        default: Math.floor(Math.random() *10000),
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