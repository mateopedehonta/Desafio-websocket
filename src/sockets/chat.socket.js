const socketsEventsChat = io =>{
    io.on('connection',socket =>{
        console.log(socket.id)
        socket.on('nwe-message',message=>{
            console.log(message)
        })
    })
}

module.exports = socketsEventsChat