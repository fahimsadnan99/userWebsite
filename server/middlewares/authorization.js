const JWT  = require('jsonwebtoken')

const authorizationUser = async (req,res,next)=>{

    const token = req.header('Authorization')
    
    if(!token){
        return req.status(404).json({"message" : "Access Denied"})
    }

    const decode = JWT.verify(token,process.env.KEY)

    if(!decode){
        return req.status(404).json({"message" : "Access ..! unAthorize user"})
    }

    try{
        req.user = decode
        next()
    }catch(err){
        return res.status(500).send(err)
    }
    
}

module.exports = authorizationUser