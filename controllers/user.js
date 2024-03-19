const User = require("../models/user");
const {createHmac} = require('node:crypto');

exports.CreateUser = async(req,res,next)=>{

    const {fullName,email,password} = req.body;
    await User.create({
        fullName:fullName,
        email:email,
        password:password
    });

    return res.redirect("/");
}


async function MatchPassword(email,password){

    const user = await User.findOne({email:email});
    if(!user)
    return null;
  
    console.log(user);
    const salt = user.salt;
    const hashedpasswod = user.password;

    const hash1 = createHmac('sha256',salt).update(password).digest("hex");

    if(hash1 === hashedpasswod)
    return {...user,password:undefined,salt:undefined};

    return null;
    
    

}
exports.loginUser = async(req,res,next) =>{

    const {email,password} = req.body;

    const user = MatchPassword(email,password);
    if(user==null) return res.redirect("/login");

    return res.redirect("/");

}



