module.exports.schemas = {
    availableBalance:{
        type: String
    },
    merchant : [
        {type: mongoose.Schema.Types.ObjectId,ref:'Merchant'}
    ],
    users : [
        {type: mongoose.Schema.Types.ObjectId,ref:'User'}
    ]
}