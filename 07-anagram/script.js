/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/
function getSortedString(str) {
    const sortStr = str.split("").sort().join("");

    return sortStr
};


function anagram(str1, str2) {
    const str1Lower = str1.toLowerCase();
    const str2Lower = str2.toLowerCase();

    if (str1Lower.length != str2Lower.length) {
        return false
    } else if (str1Lower === str2Lower) {
        return false
    } else if (getSortedString(str1Lower) === getSortedString(str2Lower)) {
        return true
    }

    return str1 === str2;
}



// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false
console.log(anagram('aabb', 'abcc')); // false
console.log(anagram('aabb', 'abba')); // true