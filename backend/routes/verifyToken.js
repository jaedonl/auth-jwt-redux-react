const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const authHeaderToken = 
        req.body.token || req.query.token || req.headers["x-access-token"]

    if (!authHeaderToken) {
        return res.status(403).send("A token is required for authentication");
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SEC);
        req.user = decoded;

    } catch (error) {
        res.status(401).send('Invalid Token')
    }

    return next()

};

const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next()
        } else {
            res.status(403).send("Your are not allowd to do that!")
        }
    })
}

module.exports = { verifyToken, verifyTokenAndAdmin };