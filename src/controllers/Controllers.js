const fs = require('fs')
const path = './src/db/db.json'

const client = (req,res)=>{
    fs.promises.readFile(path,'utf8')
                .then(productList=>{
            const productListJson = JSON.parse(productList)
            res.render('client',{productListJson})
        })
}

module.exports = {client}