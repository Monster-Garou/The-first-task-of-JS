let cars = [
    {
        name: "nexia-1", cost: 5000 
    },
    {
        name: "nexia-2", cost: 6000
    },
    {
        name: "lacetti", cost: 7000
    },
    {
        name: "Cobalt", cost: 9000
    },
    {
        name: "Gentra", cost: 12000
    },
    {
        name: "Spark", cost: 10000
    },
    {
        name: "Malibu", cost: 16000
    }
]
let cheap = cars.filter(car => car.cost <= 7000)
console.log(cheap)
//  
// 
let arr = [1, 2, false, "hello", 24, "world", undefined, null, "error", 22]
number = arr.filter(item => typeof(item) == "number")
console.log(number)
let string = arr.filter(item => typeof(item) == "string")
console.log(string)
let boolean = arr.filter(item => typeof(item) == "boolean")
console.log(boolean)
let object = arr.filter(item => typeof(item) == "object")
console.log(object)
let und = arr.filter(item => typeof(item) == "undefined")
console.log(und)
// 
// 
let arrr = [1, 2, false, "hello", 24, "world", undefined, null, "error", 22]
let elem = arrr.filter(el => typeof(el) == "number")
console.log(elem)
if (elem.length = 5){
    console.log("Good")
}
// 
// 
let index = prompt()
let arr_1 = ["Aleksey", "Kartoshka", "Margarita", "Morgenshtern", "Monica",]
let del = arr_1.shift(arr_1.indexOf(index))
console.log(arr_1)