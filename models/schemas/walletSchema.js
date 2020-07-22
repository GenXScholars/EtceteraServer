module.exports.schemas = {
    availableBalance:{
        type: String,
        required: true,
    },
    merchant : [
        {type: mongoose.Schema.Types.ObjectId,ref:'Merchant'}
    ],
    users : [
        {type: mongoose.Schema.Types.ObjectId,ref:'User'}
    ]
}