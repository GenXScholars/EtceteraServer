const expressJwt = require('express-jwt');
const userService = require('../services/userServices');
const jwtSecret = require('../config/constants')



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
            '/api/users', // to br removed and acessed only when authenticated
            '/api/merchants' // to be removed and acessed only via authentication
        ]
    });
}

async function isRevoked(req, payload, done) {
    const user = await userService.getById(payload.sub);

    // revoke token if user no longer exists
    if (!user) {
        return done(null, true);
    }

    done();
};

module.exports = jwt;