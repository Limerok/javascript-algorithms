/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    const text = str.replace(/( |^)[а-яёa-z]/g, function(x){ return x.toUpperCase(); });

    return text
}

// Протестируйте решение, вызывая функцию с разными аргументами:

//console.log(capitalize('молодость всё      простит')); // "Молодость Всё Простит