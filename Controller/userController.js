let arr =[]
const saltround = 10
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")


// const register = async (req,res)=>{
const register =  (req,res)=>{
    const details = req.body;
    const find = arr.find((item)=> item.email ==details.email);
    if(find){
        res.send({msg : "email already exist"})
    }

    // const hashpassword =await bcrypt.hashSync(details.password ,saltround)
    const hashpassword = bcrypt.hashSync(details.password ,saltround)
    const temp = {
        name : details.name,
        phone : details.phone,
        email: details.email,
        password : hashpassword
    }
     arr.push(temp)
     const token =jwt.sign({email:details.email },process.env.secretKey,{expiresIn:"7d"})
    res.send({msg: "user is registered"  , result:arr, token:token})
}


const login =async(req, res)=>{
    const details = req.body;
    const find = arr.find(item => item.email === details.email);
    if(!find){
        return res.send({msg : "User not registered"})
    }
   const validate = await bcrypt.compare(details.password , find.password)
   if(!validate){
    return res.send({msg: "User password is wrong"})
   }
   const token =jwt.sign({email:details.email},process.env.secretKey,{expiresIn:"7d"})
   return res.send({msg:"user is logged in successfully" ,token:token})
}

module.exports = {register , login}