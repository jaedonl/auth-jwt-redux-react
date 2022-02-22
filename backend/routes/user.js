const router = require("express").Router()
const User = require("../models/User")
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require("./verifyToken")

router.get('/all', verifyTokenAndAdmin, async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users)        
        
    } catch (error) {
        res.status(500).send(error)
    }
})

 
module.exports = router;
