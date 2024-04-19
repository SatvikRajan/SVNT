const User = require('../model/UserModel')
const bcrypt = require('bcrypt')
const saltRounds = 10;

module.exports.register = async (req,res,next) =>{
   try{
    const{email,password} = req.body;
    let emailCheck = await User.findOne({email})
    if(emailCheck)
    return res.json({ msg: "Email already used", status: false});
    const hashedPassword = bcrypt.hashSync(password,saltRounds)
    const user = await User.create({
        email,password: hashedPassword
    })
    return res.json({status: true,user})
   }
   catch(ex){
    next(ex)
   }
}

module.exports.login = async (req,res,next) =>{
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.json({ msg: "Incorrect Email or Password", status: false });
        if (password !== user.password) {
            return res.json({ msg: "Incorrect Email or Password", status: false });
        }

        return res.json({ status: true, user });
    } catch (ex) {
        next(ex);
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