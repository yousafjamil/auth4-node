const  router=require('express').Router();
const {User}=require('../models/user');
const Joi = require('joi');
const  bcrypt=require('bcryptjs');
const lodash=require('lodash');
const Auth=require('../middleware/auth');
router.post('/signup',async (req,res) => {
// const {error}=validateUser(req.body);
// if(error) return res.status(400).send(error.details[0].message);
const {name,email,password}=req.body

const schema = Joi.object({
    name: Joi.string().min(4).max(50).required(),
   email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(1024).required()
});
const { error, value } = schema.validate({name,email,password });
if(error) return res.status(400).send(error.details[0].message);

let user=await User.findOne({email});

if(user) return res.status(400).send('user already  registered.');
user= new User({ name,email,password});
const hashed=await bcrypt.hash(password,10);
user.password=hashed;
await user.save();
const  token=user.generateAuthToken();
res.status(200).header('x-auth-token',token).send(lodash.pick(user,['name','email']))
})

///////////////////
router.post('/login',async(req,res)=>{
const {email,password}=req.body;
const schema = Joi.object({
    email: Joi.string().min(5).max(255).required().email(),
    password: Joi.string().min(5).max(1024).required()
});
const { error, value } = schema.validate({email,password });
if(error) return res.status(400).send(error.details[0].message);
let user=await User.findOne({email});
if(!user) return res.status(400).send('Invalid email  or password.');
const  comparepassword=await bcrypt.compare(password,user.password);
if(!comparepassword) return res.status(400).send('Invalid email  or password.');
const  token=user.generateAuthToken();
res.status(200).send(token)
});


router.get('/data',Auth,async (req,res)=>{
    const user=await User.findById(req.user)
    res.send(user)
})
module.exports=router;