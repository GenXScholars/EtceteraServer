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
    merchantId:{
        type:Number
    },
    role: {
        type: String,
        default:'USER',
        enum: ['USER', 'MERCHANT', 'ADMIN']
    },
    merchant : 
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Merchant'
        },
    wallet :
        {
            type: mongoose.Schema.Types.ObjectId,
            ref:'Wallet'
        }
    
}