const  jwt=require('jsonwebtoken');

const Auth=(req,res,next)=>{
    const  token=req.header('x-auth-token');
if(!token)return res.status(401).send('Access Denied.');
try {
const decoded=jwt.verify(token,'some secret here');
if(!decoded) return res.status(400).send('invald token')
    req.user=decoded;
    next();
} catch (error) {
    res.status(400).send('something goes wrong')
}
}

module.exports=Auth;