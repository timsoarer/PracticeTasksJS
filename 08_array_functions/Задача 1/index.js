// Функция для подсчёта гласных букв в слове
const countVowels = (word) => {
    let count = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    word = word.toLocaleLowerCase();
    vowels.forEach(vowel => {
        for (let i = 0; i < word.length; i++) {
            if (word[i] == vowel) {
                count++;
            }
        }
    });

    return count;
};

const word = 'JavaScript';
const vowelCount = countVowels(word);

console.log(vowelCount);