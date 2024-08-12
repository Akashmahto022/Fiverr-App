import jwt from "jsonwebtoken"

const tokenVerify = async(req, res, next)=>{
    const token = req.cookies.accessToken

    if(!token) return res.status(401).send("You are not authentication")
    
    jwt.verify(token, process.env.JWT_KEY, async(err, payload)=>{
        if (err) return res.status(403).send("token is not valid")

            res.userId = payload.id;
            res.isSeller = payload.isSeller
    })
    next()
}

export {tokenVerify}