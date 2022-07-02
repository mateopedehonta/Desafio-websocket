let chat = []


const socketsEventsChat = io =>{
    io.on('connection',socket =>{
        io.sockets.emit('chat',chat)
        // console.log(socket.id)
        socket.on('new-message',newMessage=>{
            const { email, message } = newMessage
            chat.push({email, message})
            io.sockets.emit('chat',chat)
            // console.log(chat)
        })
    })
}

module.exports = socketsEventsChat