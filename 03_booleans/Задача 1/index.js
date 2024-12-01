const cardAvailable = true
const balance = 500

let getSum = prompt("Введите сумму банковской операции")

if (cardAvailable && balance >= getSum) {
    console.log("Операция выполняется");
} else {
    console.log("Операция отклонена");
}