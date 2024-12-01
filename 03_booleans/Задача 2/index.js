let carPower = prompt()
let taxRate

if (carPower < 100) {
    taxRate = 12
} else if (carPower >= 100 && carPower < 125) {
    taxRate = 25
} else if (carPower >= 125 && carPower < 150) {
    taxRate = 35
} else if (carPower >= 150 && carPower < 175) {
    taxRate = 45
} else if (carPower >= 175 && carPower < 200) {
    taxRate = 50
} else if (carPower >= 200 && carPower < 225) {
    taxRate = 65
} else if (carPower >= 225 && carPower < 250) {
    taxRate = 75
} else {
    taxRate = 150
}

console.log("Сумма налога:", carPower * taxRate)