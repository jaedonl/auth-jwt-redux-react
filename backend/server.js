const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config();

const userRoute = require("./routes/user")
const authRoute = require("./routes/auth")


mongoose.connect(process.env.MONGO_URL, () => {
    console.log('Connected to MongoDB');
})

app.use(cors())
app.use(express.json())

app.use("/api/users", userRoute)
app.use("/api/auth", authRoute)


app.listen(process.env.PORT || 8000, () => {
    console.log('Backend server is running!')
})