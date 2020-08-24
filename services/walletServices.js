const axios = require("axios").default;
const jwt = require("jsonwebtoken");
const config = require("../config/constants");
const apiUrl = "https://sandbox.wallets.africa"; // to be changed for production
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
  // delete: _delete
};

//axios config
const publickey = "uvjqzm5xl6bw";
const axiosCall = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${publickey}`,
   
  }
});



async function creatWallet(passedBodyParams) {
  if(!passedBodyParams){
    throw "form cannot be empty";
  }
  if(!passedBodyParams.firstname){
    throw "firstname is required";
  }
  if(passedBodyParams) {
    const { firstname, lastname, email, DOB, currency } = passedBodyParams;
     await axiosCall.post(`/wallet/generate`, {
      "firstName": firstname,
      "lastName": lastname,
      "email": email,
      "SecretKey": "hfucj5jatq8h",
      "dateOfBirth": DOB,
      "currency": currency,
    })
  }
  
}

async function verifyBvn(passedBodyParams) {
    return await axiosCall.post(`/wallet/verifybvn`, {
      "secretKey": "hfucj5jatq8h",
      "bvn": passedBodyParams.BVN,
      "dateOfBirth":passedBodyParams.DOB // format "14-04-1992",
    })
}

async function getAllWallets(passedBodyParams) {
  const secretekey = passedBodyParams.secret;
    return await axios.post(`/self/users`, {
      "secretKey": "hfucj5jatq8h",
    })
}
async function generateAcctNumber(passedBodyParams) {
    return await axiosCall.post(`/wallet/generateaccountnumber`, {
      "phoneNumber": passedBodyParams.phoneNumber,
      "secretKey": "hfucj5jatq8h",
    })
}

async function setWalletPin(passedBodyParams) {
  
    return await axiosCall.post(`/wallet/pin`, {
      "phoneNumber": passedBodyParams.phoneNumber,
      "transactionPin": passedBodyParams.transactionPin,
      secretKey: "hfucj5jatq8h",
    })
}

async function setWalletPassword(passedBodyParams) {
    return await axiosCall.post(`/wallet/password`, {
      "phoneNumber": passedBodyParams.phoneNumber,
      "password": passedBodyParams.password,
      "secretKey": "hfucj5jatq8h",
    })

}

async function getWalletTransactions(passedBodyParams) {
  
    return await axiosCasll.post(`/wallet/transactions`, {
      "skip": 0,
      "take": 10,
      "dateFrom": passedBodyParams.dateFrom,  // date format "2020-01-15",
      "dateTo": passedBodyParams.dateTO, // date format"2020-01-15",
      "transactionType": 1,
      "phoneNumber": passedBodyParams.phoneNumber,
      "transactionPin": passedBodyParams.transactionPin,
      "currency": passedBodyParams.currency,
      "secretKey": "hfucj5jatq8h",
    })
}

async function getAWalletById(passedBodyParams) {
    return await axiosCall.post(`/wallet/getuser`, {
      "phoneNumber":passedBodyParams.phoneNumber ,
      "secretKey": "hfucj5jatq8h",
    })
}

async function getWalletBalance(passedBodyParams) {
    return await axiosCall.post(`/wallet/balance`, {
      "phoneNumber": passedBodyParams.phoneNumber,
      "transactionPin":passedBodyParams.transactionPin ,
      "currency": passedBodyParams.currency,
      "secretKey": "hfucj5jatq8h",
    })
}

// transfer api
async function chargeWallet(passedBodyParams) {
    return axiosCall.post(`/wallet/debit`, {
      "transactionReference": Math.floor(Math.random() * 5566), //temporary id ..to be dynamic
      "amount": passedBodyParams.amount,
      "phoneNumber": passedBodyParams.phoneNumber,
      "secretKey": "hfucj5jatq8h", // this is constant
    })
}

async function transferFromWalletToBank(passedBodyParams) {
    return axiosCall.post(`/transfer/bank/account`, {
      "SecretKey": "hfucj5jatq8h",
      "BankCode": passedBodyParams.BankCode,
      "AccountNumber": passedBodyParams.AccountNumber,
      "AccountName": passedBodyParams.AccountName,
      "TransactionReference": Math.floor(Math.random() * 5565566),
      "Amount": passedBodyParams.Amount,
      "Narration": passedBodyParams.Narration
    })
}

async function creditWallet(passedBodyParams) {
    return await axiosCall.post(`/wallet/credit`, {
      "transactionReference":Math.floor(Math.random() * 5565566),
      "amount": passedBodyParams.amount,
      "phoneNumber": passedBodyParams.phoneNumber,
      "secretKey": "hfucj5jatq8h"
    })
}
