let i = 3
let products = [
    {
       title:'Regla',
       price:100,
       url:"https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-512.png",
       id:1
    },
    {
        title:'Lapiz',
       price:20,
       url:"https://cdn3.iconfinder.com/data/icons/education-209/64/pencil-pen-stationery-school-512.png",
       id:2
    }
]



const socketsEventsProduct = io =>{
    io.on('connection',socket =>{
        console.log(socket.id)
        
        socket.emit('product',products)

        socket.on('new-product',product=>{
            const { title, price, url} = product
            products.push({
                title,
                price,
                url,
                id: i++
            })
            io.socket.emit('product',products)
        })
    })
}

module.exports = socketsEventsProduct