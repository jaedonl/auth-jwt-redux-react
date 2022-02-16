const router = require("express").Router()
const User = require("../models/User")
const { verifyToken, verifyTokenAndAdmin } = require("./verifyToken")

router.get('/all', verifyToken, async (req, res) => {
    try {
        const users = await User.find({})
        res.status(500).json(users)
        
    } catch (error) {
        res.status(500).send(error)
    }
})
 
module.exports = router;
