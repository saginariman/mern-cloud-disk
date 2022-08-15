const express = require("express")
const mongoose = require("mongoose")
const config = require("config")
const authRouter = require("./routes/auth.routes")
const fileRouter = require("./routes/file.routes")
const cors = require('cors');
const fileUpload = require('express-fileupload')
const app = express()
const PORT = process.env.PORT || config.get(`serverPort`)
const corsMiddleware = require('./middleware/cors.middleware')
const filePathMiddleware = require('./middleware/filepath.middleware')
const path = require('path')

app.use(fileUpload({}))
app.use(corsMiddleware)
app.use(filePathMiddleware(path.resolve(__dirname, 'files')))
app.use(express.json())
app.use(express.static('static'))
app.use("/api/auth", authRouter) 
app.use("/api/files", fileRouter) 

const start = async () => {
    await mongoose.connect(config.get("dbUrl"))
    try {
        app.listen(PORT, () => {
            console.log(`Server started on ${PORT}`)
        })
    } catch (e) {
        console.log(e.message)
    }
}

start()