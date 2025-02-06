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

function listCars() {
    for (const car in cars) {
        console.log(car);
    }
}

listCars();