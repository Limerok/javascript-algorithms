/*
 * Задача 5: «Найти гласные»
 *
 * Напишите функцию findVowels(str), принимающую на вход кириллическую
 * строку str  и возвращающую количество гласных, содержащихся в этой строке.
 * Для вашего удобства вот массив кириллических гласных:
 * 
 * ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'].
 *
*/
const massVowels = ['а', 'я', 'о', 'ё', 'у', 'ю', 'ы', 'и', 'э', 'е'];

function findVowels(str) {
    let sumVowels = 0;
    const massVowelsStr = massVowels.join('');
    const text = str.toLowerCase().split('');

    text.forEach((item) => {
        if (massVowelsStr.includes(item)) {
            sumVowels += 1;
        }
    })

    return sumVowels
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(findVowels('здрааавствууй')); // 2
console.log(findVowels('привет')); // 2
console.log(findVowels('хеллоу')); // 3