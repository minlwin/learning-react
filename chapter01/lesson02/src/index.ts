// Variable Declaration
var count:number
let today:string

// var can declare again within same scope
var count:number
var count:number

for(var i = 0; i < 10; i ++) {
    console.log(i)
}

// var can see outside the block
console.log(i)

// Declaring Constant
const BASE_URL:string = 'http://localhost:8080'

// Type Inference
// Type of TYPESCRIPT is string
const TYPESCRIPT = "TypeScript"
// Type of result is boolean
let result = false
// Type of counter is number
var counter = 0