const name = 'Andrew'
const userAge = 27

const user = {
    name: name,
    age: userAge,
    location: 'berlin'
}

console.log(user)

//object destructuring

const product = {
    label: 'Red notebook',
    price: 4,
    stock: 204,
    salePrice: undefined,
    rating: 4.3
}  

// const label = product.label
// const stock = product.stock

// const {label:productLabel, stock, rating  = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock = 0} ={}) => {
    console.log(type, label, stock)
}

transaction('order', product)
