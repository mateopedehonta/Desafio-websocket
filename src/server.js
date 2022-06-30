//CALL MODULES
const express = require("express")
const { Server:HttpServer }= require("http")
const { Server:IOserver }= require("socket.io")
const router = require('./routes/router')
const path = require('path')
const socketEventProduct = require("./sockets/products.socket")
const socketEventChat = require("./sockets/chat.socket")


//INITIALIZATIONS
const app = express()
const httpServer = new HttpServer(app)
const io = new IOserver(httpServer)

//SETTINGS
app.set("view engine",'ejs')
app.set("views", path.join(__dirname,"./views"))
app.set('port', process.env.PORT || 8080);
const PORT = app.get('port')

//STATIC FILES
// app.use(express.static(path.join(__dirname,"/client")))
app.use('/static', express.static(__dirname + '/public'));

//MIDDLEWARES
app.use(express.json())
app.use(express.urlencoded({extended: true}))

//ROUTES
app.use('/',router)

socketEventProduct(io)
socketEventChat(io)

//SERVER
httpServer.listen(PORT,(err)=>{
    if(err){
        console.log(`server error: ${err}`)
    }
    console.log(`server listen port ${PORT}`)
})