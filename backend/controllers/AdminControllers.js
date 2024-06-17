const Admin = require('../model/AdminModel')
const bcrypt = require('bcrypt')
const saltRounds = 10;

module.exports.register = async (req,res,next) =>{
   try{
    const{email,password} = req.body;
    let emailCheck = await Admin.findOne({email})
    if(emailCheck)
    return res.json({ msg: "Email already used", status: false});
    const hashedPassword = bcrypt.hashSync(password,saltRounds)
    const user = await Admin.create({
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
        const user = await Admin.findOne({ email });
        if (!user) return res.json({ msg: "Incorrect Email or Password", status: false });
        if (password !== user.password) {
            return res.json({ msg: "Incorrect Email or Password", status: false });
        }

        return res.json({ status: true, user });
    } catch (ex) {
        next(ex);
    }
 }  

module.exports.getAllAdmins = async (req,res,next)=>{
    try{    
        const users = await Admin.find({_id:{$ne:req.params.id}}).select([
            "email","username","_id"
        ])
        return res.json(users)
    }
    catch(ex){
        next(ex)
    }
}