const user = {
    name:'Petro',
    hobby: 'football',
    premium: true
}
user.hobby = 'skydiving'
user.mood = 'happy'
user.premium = false


const keys = Object.keys(user)
for(const key of keys) {
  console.log('Value:', user[key])
}
const hotel = {
    name: 'Resort Hotel',
    stars: 5,
    capacity: 100
}
const obj = Object.values(hotel)
function countProps(obj) {
 return obj.length
}
console.log(countProps(obj))
const employees = {
    Petro: 3,
    Sanya:5,
    Sergiy: 7,
    Vladuslav: 6
}

function findBestEmployee(employees, mostProductive) {
    const mostProductive = Math.max(...Object.values(employees))
    return mostProductive
}
console.log(findBestEmployee(employees, mostProductive))



const salary = {
    Petro: 3000,
    Sanya: 5000,
    Sergiy: 7000,
    Vladuslav: 6000
}

function countTotalSalary(salary) {
    const salaryEmployees = Object.values(salary)
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
    for (const product of allProducts) {
        if (product.name === productName) {
            total += product.price * product.quantity;
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