const config = require('../config/constants');
const userService = require('../services/userServices');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/userModel');
require('../auth/userPassport')





async function  userLogin(req, res, next){
    let username = req.body.username;
    let password = req.body.password;
    console.log("password" + req.body.password);
    console.log("username" + req.body.username);
    if(!username || !password){
       res.status(404).json({
           message: "username or password cannot be empty"
       })
    }
    const user = await User.findOne({username});
    if(user){
     bcrypt.compare(password, user.password).then((result) => {
       console.log(res);
       if(!result){
              //user password in the token so we pick only the email and id
      const body = { _id : user._id, username : user.username };
      //Sign the JWT token and populate the payload with the user email and id
      const token = jwt.sign({ user : body }, config.SECRET);
      //Send back the token to the user
       res.status(200).json({
          user,
          token
         })
       } 
     })      
    } else {
        res.status(404).json({
            message: "username or password inccorect"
        })
    }
}

function register(req, res, next) {
    userService.create(req.body)
        .then(() => res.json({
            message: `user with username ${req.body.username} was created`
        }))
        .catch(err => {
            next(err)
        });
}

function getAll(req, res, next) {
    userService.getAll()
        .then(users => res.json(users))
        .catch(err => next(err));
}

function getCurrent(req, res, next) {
    userService.getById(req.user.sub)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function getById(req, res, next) {
    userService.getById(req.params.id)
        .then(user => user ? res.json(user) : res.sendStatus(404))
        .catch(err => next(err));
}

function update(req, res, next) {
    userService.update(req.params.id, req.body)
        .then(() => res.json({}))
        .catch(err => next(err));
}

function _delete(req, res, next) {
    userService.delete(req.params.id)
        .then(() => res.json({}))
        .catch(err => next(err));
}
// module.exports ={
//     async register(req, res, next){
//         let username = req.body.username;
//         let password = req.body.password;
//         let email = req.body.email;
//        let newUser = await  require('../models/userModel').create({
//             username: username,
//             password: password,
//             email: email,
//           });
//        newUser.then(user => {
//            res.send(200).json({
//                message: 'user was created sucesfully..check db'
//            })
//        }).catch(err =>{
//            if(err) {
//                res.send(404).json({
//                    message: "user was not created succesfully"
//                })
//            };
//        })
//     }
// } 



module.exports = {
    userLogin,
    getAll,
    getCurrent,
    getById,
    register,
    update,
    delete: _delete
}; 