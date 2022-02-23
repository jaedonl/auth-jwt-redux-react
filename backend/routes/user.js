const router = require("express").Router()
const User = require("../models/User")
const { verifyToken, verifyTokenAndAdmin } = require("./verifyToken")

router.get('/all', verifyTokenAndAdmin, async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).json(users)        
        
    } catch (error) {
        res.status(500).send(error)
    }
})

router.put('/:id', verifyToken, async (req, res) => {
    try {
        const filter = { username: req.params.id }

        // const user = await User.findOneAndUpdate(filter, { isAdmin: false })
        const user = await User.findOneAndUpdate(filter, req.body)
        res.status(200).json(user)
        
    } catch (error) {
        res.status(500).send(error)
    }
})

 
module.exports = router;
