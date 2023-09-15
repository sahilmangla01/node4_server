
const jwt = require("jsonwebtoken")
const authMiddleware = (req,res,next)=>{

    const bearer = req.headers["authorization"]
    const token = bearer && bearer.split(" ")[1]
    // if(bearer === undefined){
    //     return res.send({msg: "no token"})
    // }
    // else{
        
    if(!token){
        return res.send({msg:"user not authorized person or session expired    "})
    }
    const validate = jwt.verify(token,process.env.secretKey)
    if(!validate){
        return res.send({msg:"user not authorized for the particular resourses"})
    }
    
    return next();
    }

    
// }

module.exports = authMiddleware