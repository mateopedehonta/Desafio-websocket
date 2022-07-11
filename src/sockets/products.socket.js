const fs = require('fs')

let i = 3

const path = './src/db/db.json'

const socketsEventsProduct = io =>{
    io.on('connection',socket =>{
        console.log(socket.id)
        fs.promises.readFile(path,'utf8')
                .then(productList=>{
            const productListJson = JSON.parse(productList) 
            io.sockets.emit('product',productListJson)
            socket.emit('product',productListJson)
        })

        socket.on('new-product',product=>{
            const { title, price, url} = product
            if (title == ""|| price == "" || url == "") {
                console.log('el formulario esta vacio')
            } else {
                fs.promises.readFile(path,'utf8')
                .then(productList=>{
                const productListJson = JSON.parse(productList)
                productListJson.push({
                    title,
                    price,
                    url,
                    id: i++
                })
                fs.promises.writeFile(path,JSON.stringify(productListJson,null,2))
                    .then(e=> io.sockets.emit('product',productListJson))
                    .catch(err=>console.log('error: ',err))
            })
            }

        })
    })
}

module.exports = socketsEventsProduct