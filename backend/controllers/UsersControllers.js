const User = require('../model/UserModel')
const bcrypt = require('bcrypt')
const saltRounds = 10;

module.exports.register = async (req,res,next) =>{
   try{
    const{username,email,password} = req.body;
    let usernameCheck = await User.findOne({username})
    if(usernameCheck)
    return res.json({ msg: "Username already used", status: false});
    let emailCheck = await User.findOne({email})
    if(emailCheck)
    return res.json({ msg: "Email already used", status: false});
    const hashedPassword = bcrypt.hashSync(password,saltRounds)
    const user = await User.create({
        email,username,password: hashedPassword
    })
    return res.json({status: true,user})
   }
   catch(ex){
    next(ex)
   }
}

module.exports.login = async (req,res,next) =>{
    try{
     const{username,password} = req.body;
     const user = await User.findOne({username})
     if(!user)
     return res.json({ msg: "Incorrect Username or Password" ,status: false});
     const isPasswordValid = bcrypt.compareSync(password,user.password)
     if(!isPasswordValid)
     return res.json({ msg: "Incorrect Username or Password" ,status: false});
    return res.json({status: true,user})
    }
    catch(ex){
     next(ex)
    }
 }  

module.exports.getAllUsers = async (req,res,next)=>{
    try{    
        const users = await User.find({_id:{$ne:req.params.id}}).select([
            "email","username","_id"
        ])
        return res.json(users)
    }
    catch(ex){
        next(ex)
    }
}