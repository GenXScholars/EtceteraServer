const forge    = require("node-forge");
const axios = require('axios').default;
const md5 = require('md5');


var options = {
    url: "",  // live URL: https://api.ravepay.co    to be added for production
    method: "",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: {
        "PBFPubKey": "",  // merchant public key goes here
        "alg": "3DES-24",
        client: "",
    }
}

 class Rave {
    /**
     * Rave object constructor
     * @param {*} public_key This is a string that can be found in merchant rave dashboard
     * @param {*} secret_key This is a string that can be found in merchant rave dashboard
     */
    constructor(public_key, secret_key){
        this.public_key = public_key;
        this.secret_key = secret_key;
    }

    encryptCardDetails(card_details) {
        card_details = JSON.stringify(card_details);
        let cipher   = forge.cipher.createCipher('3DES-ECB', forge.util.createBuffer(this.getKey()));
        cipher.start({iv:''});
        cipher.update(forge.util.createBuffer(card_details, 'utf-8'));
        cipher.finish();
        let encrypted = cipher.output;
        return ( forge.util.encode64(encrypted.getBytes()) );
    }

    getKey() {
        let sec_key = this.secret_key;
        let keymd5 = md5(sec_key);
        let keymd5last12 = keymd5.substr(-12);

        let seckeyadjusted = sec_key.replace('FLWSECK-', '');
        let seckeyadjustedfirst12 = seckeyadjusted.substr(0, 12);

        return seckeyadjustedfirst12 + keymd5last12;
    }

    async initiatePayment(card_details) {
            let encrypted_card_details = this.encryptCardDetails(card_details);
            let payment_options = Object.assign({}, options);
            payment_options.url = 'https://ravesandboxapi.flutterwave.com/flwv3-pug/getpaidx/api/charge';
            payment_options.body.client = encrypted_card_details;
            payment_options.method = 'POST';
            payment_options.body.PBFPubKey = this.public_key; // set public key

        return  await axios.create({payment_options});
    }
}


module.exports = {
    Rave
}