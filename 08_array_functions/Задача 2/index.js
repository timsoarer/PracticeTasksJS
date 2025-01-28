const filterAndSortUsers = (users) => {
    return users
        .filter((entry) => entry[1] > 25 && entry[2])
        .sort((a, b) => a - b)
        .map((entry) => entry[0]);
};

const users = [
    ["Alice", 25, true],
    ["Bob", 30, false],
    ["Charlie", 22, true],
    ["David", 27, true],
    ["Eve", 20, false]
];

const sportUsersOver25 = filterAndSortUsers(users);
console.log(sportUsersOver25); // Выведет ["David"]