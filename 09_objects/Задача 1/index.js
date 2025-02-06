const cars =
{
    bmw: {
        name: "BMW",
        wheels: 4,
        doors: 2,
        isStarted: false,
        hp: 1000
    },
    audi: {
        name: "Audi",
        wheels: 6,
        doors: 1,
        isStarted: true,
        hp: 500
    },
    mercedes: {
        name: "Mercedes",
        wheels: 42,
        doors: 69,
        isStarted: false,
        hp: 1
    }
}

function getCar(carBrand) {
    for (const car in cars) {
        if (car == carBrand) {
            return cars[car];
        }
    }
    return "Автомобиль не найден!"
}

console.log(getCar("bmw"))
console.log(getCar("mercedes"));
console.log(getCar("very evil horse"));