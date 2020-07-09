const mongoose = require('mongoose');
const params = require('./constants');


const connection = mongoose.connect(params.MONGO_URI, () => { },  params.MONGO_OPTIONS )
.then(() =>{
    console.log('db connected');
})
    .catch(err => {
        console.log(err);
    });
module.exports = connection;