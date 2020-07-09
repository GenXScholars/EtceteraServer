module.exports = Object.freeze({
    PROTOCOL: (process.env.NODE_ENV === 'development') ? 'http://' : 'http://',
    SERVER_NAME : 'localhost:3080/',
    APP_VERSION : '1.0.0',
    APP_LANGUAGE: 'English',
    APP_NAME: 'Epayment',
    AP_AUTHOR: {
        name: 'ADJARO OGAGA',
        contact: 'ogagaadjaro@gmail.com'
    },
    MONGO_URI : 'mongodb+srv://ogaga:1986LORDo@cluster0-yuz76.azure.mongodb.net/ogaga?retryWrites=true&w=majority',
    MONGO_OPTIONS : {
        useNewUrlParser: true ,
        useUnifiedTopology : true, // to use the mongodb engine ... removing reconnecTries && autoReconect & reconnect interval option
        useFindAndModify : false, // to use the querries findOneAndUpdate() and findOneAndRemove() use native findOneAndUpdate() rather than findAndModify()
        useCreateIndex : true, // to remove deprecation warnings
        autoIndex : false, // dont build autoindexes for production
        bufferCommands : false, // disable buffer commands
        poolSize: 10,
        serverSelectionTimeoutMS : Number.MAX_VALUE, // keep retrying for eternity
        connectTimeoutMS : 10000, // Times out connectio after 10 seconds
        socketTimeoutMS : 45000,   // close sockets after 45 seconds of inactity
        family : 4,
    }
})