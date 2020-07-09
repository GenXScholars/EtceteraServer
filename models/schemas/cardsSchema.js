module.exports.schemas = {
    cardNumber:{
        type: String,
        required: true,
    },
    cardValidity:{
        type: String,
        required: true
    },
    cardExpiryDate:{
        type: String,
        required: true,
    },
    cardHolderName:{
        type: String,
        required: true
    },
    cardType:{
        type:Image,
        required: true
    },
    cardFlag:{
        type: String,
        required: false
    }
}