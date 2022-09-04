// 1 - var, let, const
var x = 10
var y = 15

if (y > 5) {
    var x = 5
console.log(x)    
}
console.log(x)

let a = 10
let b = 15

if (b > 5) {
    let a = 5
    console.log(a)
}
console.log(a)

let i = 100
for (let i = 0; i < 5; i++){
console.log(i)
}
console.log(i)

function logname() {
    const name = 'Odair'
    console.log(name)
}
const name = 'Ethan'

logname()
console.log(name)

// 2 arrow function
const sum = function sum(a, b) {
    return a + b
    
}

const arrowSum = (a, b) =>  a + b
    
console.log(sum(5, 5))
console.log(arrowSum(5, 5))

const greeting = (name) => {
    if (name) {
        return 'Olá ' + name + '!'
        
    } else {
        return 'Olá!'
        
    }
}
console.log(greeting('Odair'))
console.log(greeting())

const testeArrow = () => console.log('Testou')

testeArrow()


// this classico

const user = {
    name: 'Emily',
    sayUsername() {
        var self = this
        setTimeout(function () {
            console.log(self)
            console.log('Username: ' + self.name)
        }, 500)
    },
    sayUserNameArrow() {
        setTimeout(() => {
            console.log(this)
            console.log('Username: ' + this.name)
        }, 700)  
    }
}

// user.sayUsername()

// user.sayUserNameArrow()


// 3 Filter

const arr = [1, 2, 3, 4, 5]
const highHumbers = arr.filter((n) => {
    if (n >= 3) {
    return n
    }
})

console.log(highHumbers)

const users = [
    { name: 'Odair', available: true },
    { name: 'Raquel', available: false },
    { name: 'Emily', available: false },
    { name: 'Ethan', available: true}

]
const availableUsers = users.filter((user) => user.available)
const notAvailableUsers = users.filter((user) => !user.available )

console.log(availableUsers)
console.log(notAvailableUsers)


// 4 map
const products = [
    { name: 'Camisa', price: 10.99, category: 'Roupas' },
    { name: 'Chaleira Eletrica', price: 49.99, category: 'Eletro' },
    { name: 'Fogão', price: 400, category: 'Eletro' },
    { name: 'Calça Jeans', price: 50.99, category: 'Roupas'},
]
products.map((product) => {
    if (products.category === 'Eletro') {
        product.OnSale = true
    }
})

console.log(products)

// 5 template literals
const userName = 'Odair'
const age = 45
console.log(`O nome do usuário é ${userName} e ele tem ${age} de idade`)

// 6 Destructuring
const fruits = ["Maça", "Laranja", "Mamão"]

const [f1, f2, f3] = fruits

console.log(f1)
console.log(f2)
console.log(f3)


// destruction com objetos
const productDetails = {
    name: "Mouse",
    price: 39.99,
    category: "Periféricos",
    color: "Cinza"
}
const{name: productName, price, category: productCategory, color} = productDetails

console.log(`O nome do produto é ${productName}, custa R$${price}, pertence a categoria ${productCategory}, e é da cor ${color}`)

// 7 Spred operator
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = [...a1, ...a2]

console.log(a3)

const a4 = [0, ...a1, 4]

console.log(a4)

// objeto

const carName = { name: 'Fiesta' }
const carBrand = { brand: 'Ford' }
const otherInfos = { km: 100000, price: 49000 }

const car = {...carName, ...carBrand, ...otherInfos, wheels: 4}

console.log(car)

// 8 Classes
class Product {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
    productWithDiscount(discount) {
        return this.price * ((100 - discount)/ 100)
    }       

}
const shirt = new Product(`Camisa gola V`, 20)
console.log(shirt.name)
console.log(shirt.productWithDiscount(10))
console.log(shirt.productWithDiscount(50))

// 9 Herança
class ProductWithAttributes extends Product{
    constructor(name, price, colors) {
        super(name, price)
        this.colors = colors
    }
    
    showColors() {
        console.log('As cores são: ')
        this.colors.forEach((color) => {
          console.log(color)  
        })
    }
}

const hat = new ProductWithAttributes('Chapéu', 29.99, ['Preto', 'Azul', 'Verde'])

console.log(hat.name)

console.log(hat.productWithDiscount(30))

hat.showColors()