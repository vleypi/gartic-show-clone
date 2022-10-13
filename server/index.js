const express = require('express')
const app = express()
const server = require('http').Server(app)
const io = module.exports.io = require('socket.io')(server)
const socket = require('./socket/socket')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cookieParser = require('cookie-parser')
dotenv.config()
const PORT = process.env.PORT || 5001
const router = require('./routes/index')

const cors = require('cors')

app.use(cors({
    origin: ['http://localhost:3000'],
    credentials: true
}))
app.use(express.json({
    extended: true
}))
app.use(cookieParser())

app.use('/api',router)

io.on('connection', (s)=>socket(s));

const start = async () =>{
    try{
        await mongoose.connect(process.env.MONGO,{ useNewUrlParser: true, useUnifiedTopology: true })
        server.listen(PORT,()=>console.log(PORT))
    }
    catch(err){
        console.log(err)
    }
}

start();