const expressJwt = require('express-jwt');
const userService = require('../services/userServices');
const jwtSecret = require('../config/constants')



function jwt() {
    const secret = jwtSecret.SECRET;
    return expressJwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/',
            '/api/user-signUp',
            '/api/merchant-signUp',
            '/api/user-login',
            '/api/merchant-login',
            '/api/users'
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