const mongoose = require('mongoose');
const Joi = require('joi');
const  jwt=require('jsonwebtoken');
const userSchema=new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 255
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 1024
    }
});

userSchema.methods.generateAuthToken=function (){
    const token= jwt.sign({_id:this._id},'some secret here');
    return token;
};
const User = mongoose.model('user',userSchema );


// const validateUser = (user) => {
//     const schema = Joi.object({
//         name: Joi.String().min(4).max(50).required(),
//         email: Joi.String().min(5).max(255).required().email(),
//         password: Joi.String().min(5).max(1024).required(),
//     })
   
//     return Joi.validate({user, schema});
// }

module.exports.User = User;
// module.exports.validateUser = validateUser;