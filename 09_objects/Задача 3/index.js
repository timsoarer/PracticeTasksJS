function createCar(carParams) {
    const baseCar = {
        wheels: 4,
        doors: 4,
        isStarted: false
    }

    return Object.assign(baseCar, carParams);
}

console.log(createCar({name: "SPIDERTRUCK", legs: 8, eyes: 8, teeth: 1000}));
console.log(createCar({name: "actually just a bicycle", wheels: 2, doors: 0, transmission: 35}));