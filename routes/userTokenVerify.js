const jwt = require("jsonwebtoken");

module.exports = (req,res, next) =>
{
    console.log("recieve")
    const token = req.body.token; 
    console.log(token)
    if(!token) return res.status(401).send({error:true, message:"Invalid Token"})
    try 
    {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user=verified; 
        next()
    }
    catch(err)
    {
        res.status(400).send({error:true, message:"Invalid Token"})
    }
}