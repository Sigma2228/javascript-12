const user = {
    name: 'Petro',
    hobby: 'football',
    premium: true
}
let {name = 'Petro', hobby = 'football', premium = true, mood = 'happy'} = user
hobby = 'skydiving'
user.mood = 'happy'
premium = false
console.log(name, hobby, mood, premium)


const keys = Object.keys(user)
for(const key of keys) {
  console.log('Value:', user[key])
}
const hotel = {
    name: 'Resort Hotel',
    stars: 5,
    capacity: 100
}
let { naame = 'Resort Hotel', stars = 5,
    capacity = 100} = hotel
const obj = Object.values(naame, stars, capacity)
function countProps(obj) {
 return obj.length
}
console.log(countProps(obj))
const employees = [
    {name: 'Petro', tasks: 3},
    {name: 'Sanya', tasks: 5},
    {name: 'Sergiy', tasks: 7},
    {name: 'Vladuslav', tasks: 4}
];

function findBestEmployee(employees) {
    const mostProductiveValue = Math.max(...employees.map(employee => employee.tasks));

    const mostProductiveEmployee = employees.find(employee => employee.tasks === mostProductiveValue);

    return mostProductiveEmployee.name;
}

console.log(findBestEmployee(employees));



const salary = {
    Petro: 3000,
    Sanya: 5000,
    Sergiy: 7000,
    Vladuslav: 6000
}
let { Petro = 3000, Sanya = 5000, Sergiy = 7000,  Vladuslav = 6000} = salary
function countTotalSalary(Petro, Sanya, Sergiy, Vladuslav) {
    const salaryEmployees = Object.values(Petro, Sanya, Sergiy, Vladuslav)
    let total = 0
    for(let i = 0;i < salaryEmployees.length;i++) {
      total += salaryEmployees[i]
    }
    return total
}
console.log('Сума зарплат:', countTotalSalary(salary))
const allProducts = [
  {name:'banana', price: 5, quantity: 3},
  {name:'apple', price: 10, quantity: 1},
  {name:'mango', price: 15, quantity: 2}
];

function calculateTotalPrice(allProducts, productName) {
    let total = 0;
    for (const { name, price, quantity } of allProducts) {
        if (name === productName) {
            total += price * quantity;
        }
    }
    return total;
}

console.log(calculateTotalPrice(allProducts, 'banana'));
function getAllPropValues(arr, prop) {
const values = [];
for (const item of arr) {
    if (prop in item) {
        values.push(item[prop]);
    }
}
return values;
}

console.log(getAllPropValues(allProducts, 'name')); 
console.log(getAllPropValues(allProducts, 'price'));
console.log(getAllPropValues(allProducts, 'quantity'));