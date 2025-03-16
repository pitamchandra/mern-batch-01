const numbers = [12, 23, 45, 2, 15, 30]

const peoples = ["pitam", "imran", "rasel", "munna", "masum", "ripa", "arni"]

const total = numbers.reduce((prev, current) => prev + current, 0)

const laptops = [
    {id: 1, name: 'del', price: 25000},
    {id: 2, name: 'hp', price: 39000},
    {id: 3, name: 'hp', price: 30000},
    {id: 4, name: 'mac', price: 155000}
]

const cheapRate = laptops.find((laptop) => laptop.price < 50000)

console.log(cheapRate);

// const getId = laptops.forEach(laptop => {
//     console.log(laptop.id);
// });