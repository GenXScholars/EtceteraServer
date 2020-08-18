const expressJwt = require('express-jwt');
const userService = require('../services/userServices');
const merchant = require('../services/merchantServices');
const admin = require('../services/adminServices');
const jwtSecret = require('../config/constants');
const merchantServices = require('../services/merchantServices');
const adminServices = require('../services/adminServices');



function jwt() {
    const secret = jwtSecret.SECRET;
    return expressJwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/',
            '/api/admins',
            '/api/admin-signUp',
            '/api/admin-login',
            '/api/user-signUp',
            '/api/merchant-signUp',
            '/api/user-login',
            '/api/merchant-login',
            '/api/wallet/create', // to be removed and accessed only by auth users
            '/api/users', // to br removed and acessed only when authenticated
            '/api/merchants', // to be removed and acessed only via authentication
            '/api/self/users' // to be removed from and accessed via tokens
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);
    const merchant = await merchantServices.getById(payload.sub);
    const admin = await adminServices.getById(payload.sub);

    // revoke token if user no longer exists
    if (!user || !merchant || !admin) {
        return done(null, true);
    }

    done();
};

module.exports = jwt;