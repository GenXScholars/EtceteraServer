module.exports.schemas = {
    walletOwner:{
       type:String,
       required:true
    },
    walletPin:{
        type:String
    },
    walletPassword:{
        type:String
    },
    phoneNumber:{
        type:String,
        required:true
    },
    availableBalance:{
        type: String,
        required: true,
    },
      accountName:{
          type:String,
          required:true
      },
      accountNumber:{
          type:String,
          required:true
      }          
}