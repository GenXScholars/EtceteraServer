const axios = require("axios").default;
const jwt = require("jsonwebtoken");
const config = require("../config/constants");
const apiUrl = "https://sandbox.wallets.africa";
module.exports = {
  creatWallet,
  verifyBvn,
  generateAcctNumber,
  setWalletPin,
  setWalletPassword,
  getWalletTransactions,
  getAWalletById,
  getWalletBalance,
  getAllWallets,
  chargeWallet,
  creditWallet,
  transferFromWalletToBank,
  transferFromWalletToWallet,
  // delete: _delete
};

//axios config

const publickey = "uvjqzm5xl6bw";
const axiosCall = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${publickey}`,
  },
});

async function creatWallet(bodyParams) {
    const result = await axiosCall.post(`/wallet/generate`, {
      "firstName": bodyParams.firstname,
      "lastName": bodyParams.lastname,
      "email": bodyParams.email,
      "SecretKey": "hfucj5jatq8h",
      "dateOfBirth": bodyParams.DOB,
      "currency": bodyParams.currency,
    });
}

async function verifyBvn(bodyParams) {
    const result = await axiosCall.post(`self/verifybvn`, {
      "secretKey": "hfucj5jatq8h",
      "bvn": bodyParams.BVN,
      "dateOfBirth":bodyParams.DOB // format "14-04-1992",
    });
}

async function getAllWallets(bodyParams) {
  const secretekey = req.body.secret;
    const result = await axios.post(`/self/users`, {
      "secretKey": "hfucj5jatq8h",
    });
}
async function generateAcctNumber(bodyParams) {
    const result = await axiosCall.post(`/wallet/generateaccountnumber`, {
      "phoneNumber": bodyParams.phoneNumber,
      "secretKey": "hfucj5jatq8h",
    });
}

async function setWalletPin(bodyParams) {
  
    const result = await axiosCall.post(`/wallet/pin`, {
      "phoneNumber": bodyParams.phoneNumber,
      "transactionPin": bodyParams.transactionPin,
      secretKey: "hfucj5jatq8h",
    });
}

async function setWalletPassword(bodyParams) {
    const result = await axiosCall.post(`/wallet/password`, {
      "phoneNumber": bodyParams.phoneNumber,
      "password": bodyParams.password,
      "secretKey": "hfucj5jatq8h",
    });

}

async function getWalletTransactions(bodyParams) {
  
    const result = await axiosCasll.post(`/wallet/transactions`, {
      "skip": 0,
      "take": 10,
      "dateFrom": bodyParams.dateFrom,  // date format "2020-01-15",
      "dateTo": bodyParams.dateTO, // date format"2020-01-15",
      "transactionType": 1,
      "phoneNumber": bodyParams.phoneNumber,
      "transactionPin": bodyParams.transactionPin,
      "currency": bodyParams.currency,
      "secretKey": "hfucj5jatq8h",
    });
  
}

async function getAWalletById(bodyParams) {

    const result = await axiosCall.post(`/wallet/getuser`, {
      "phoneNumber":bodyParams.phoneNumber ,
      "secretKey": "hfucj5jatq8h",
    });
 
}

async function getWalletBalance(bodyParams) {

    const result = await axiosCall.post(`/wallet/balance`, {
      "phoneNumber": bodyParams.phoneNumber,
      "transactionPin":bodyParams.transactionPin ,
      "currency": bodyParams.currency,
      "secretKey": "hfucj5jatq8h",
    })

}

// transfer api

async function chargeWallet(bodyParams) {
    const result = axiosCall.post(`/wallet/debit`, {
      "transactionReference": Math.floor(Math.random() * 5566), //temporary id ..to be dynamic
      "amount": bodyParams.amount,
      "phoneNumber": bodyParams.phoneNumber,
      "secretKey": "hfucj5jatq8h", // this is constant
    })
}

async function transferFromWalletToBank(bodyParams) {
    axiosCall.post(`/transfer/bank/account`, {
      "SecretKey": "hfucj5jatq8h",
      "BankCode": req.body.BankCode,
      "AccountNumber": req.body.AccountNumber,
      "AccountName": req.body.AccountName,
      "TransactionReference": Math.floor(Math.random() * 5565566),
      "Amount": req.body.Amount,
      "Narration": req.body.Narration
    });
}

async function transferFromWalletToWallet(bodyParams){
  const result = await axiosCall.post(``,{
    
  })
}

async function creditWallet(bodyParams) {
    const result = await axiosCall.post(`/wallet/credit`, {
      "transactionReference":Math.floor(Math.random() * 5565566) ,
      "amount": bodyParams.amount,
      "phoneNumber": bodyParams.phoneNumber,
      "secretKey": "hfucj5jatq8h"
    })
}
