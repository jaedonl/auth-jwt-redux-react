const router = require("express").Router()
const User = require("../models/User")
const CryptoJS = require("crypto-js")
const jwt = require("jsonwebtoken")

router.post('/register', async (req, res) => {
    try {
        const newUser = await new User({
            username: req.body.username,
            email: req.body.email,
            // password: req.body.password,
            password: CryptoJS.AES.encrypt(
                req.body.password,
                process.env.PASS_SEC
            ).toString(),
            isAdmin: false,
        })
        const user = await newUser.save()
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error)
    }
})


router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })


        if (!user) {
            res.status(401).json('Wrong email.')
        }

        const hashedPassword = await CryptoJS.AES.decrypt(
            user.password, 
            process.env.PASS_SEC        
        )
        const originalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

        if (originalPassword !== req.body.password) {
            res.status(401).json('Wrong password.')
        }

        // create token
        const token = jwt.sign(
            { 
                id: user._id,
                isAdmin: user.isAdmin
            }, 
            process.env.JWT_SEC,
            {expiresIn: "1d"}
        );

        const { password, ...others } = user._doc

        res.status(200).json({...others, token})

    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router;
