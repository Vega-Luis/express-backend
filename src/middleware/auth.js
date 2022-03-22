const jwt = require("jsonwebtoken");

const config = process.env;

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader + "  auth header");
    if (typeof authHeader !== 'undefined') {
        jwt.verify(authHeader, config.TOKEN_KEY, (error, token) => {
            req.token = token;
            next();
        })
    } else {
        res.status(403).send({
            message: "token required"
        })
    }
}