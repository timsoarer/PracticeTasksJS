const currentYear = 2024;
let index = 0

let name1 = prompt("Введите имя первого пользователя")
let age1 = currentYear - prompt("Введите год рождения первого пользователя")

let name2 = prompt("Введите имя второго пользователя")
let age2 = currentYear - prompt("Введите год рождения второго пользователя")

let name3 = prompt("Введите имя третьего пользователя")
let age3 = currentYear - prompt("Введите год рождения третьего пользователя")

console.log(++index, name1, age1)
console.log(++index, name2, age2)
console.log(++index, name3, age3)
console.log("Средний возраст пользователей:", (age1 + age2 + age3) / 3)