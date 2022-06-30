const list = document.querySelector("#products")
const btnProduct = document.querySelector("#btn-product")
const title = document.querySelector("#title")
const price = document.querySelector("#price")
const url = document.querySelector("#url")

const socket = io.connect()

socket.on('product',product =>render(product))


btnProduct.addEventListener('click', e=>{
    e.preventDefault()
    const newProduct = {
        title:title.value,
        price:price.value,
        url:url.value
    }
    socket.emit('new-product',newProduct)
    return false
    // console.log( title.value, price.value, url.value )
})

const render = (data)=>{
    limpiarHTML(list)
    data.forEach(data => {
        const { title , price , url } = data
        const productDiv = document.createElement('div')
        productDiv.innerHTML = `
            <div class="box">
                <h2>${title}</h2>
                <p>Precio:${price}</p>
                <img src='${url}' alt="">
            </div>
        `
        list.appendChild(productDiv)
    });
    
}

const chat = document.querySelector("#chat")
const email = document.querySelector("#email")
const btnChat = document.querySelector("#btn-chat")



const limpiarHTML=(element)=> {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

