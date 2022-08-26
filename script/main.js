
// ### NORMAL level

// #### Task 1 🖥

// Выведи все элементы массива в консоль с помощью метода **`forEach`**

// ```javascript
//     const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
// ```

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`

// Решение

const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

fibonacci.forEach (function (item,indx) {
    console.log(item)
})

// 1способ
 const fib = fibonacci.forEach ((item) => console.log(item));

 // 2способ
fibonacci.forEach ((item) => {console.log(item);})

// 3способ

 fibonacci.forEach((value, index) => {
    console.log(value, index);
})

// #### Task 2 🖥

// Используя метод **`map`** создайте новый массив, на основе массива **`users`**,
//  в котором каждый элемент массива будет содержать строку вида:

// > ['member 1: Darya', 'member 2: Masha', ... etc]

// ```javascript
//     const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
// ```

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']
// var 1

function mapMember(item,index) {
    let i = index + 1;
    return (`member ${i}:` + item)
}
console.log(users.map(mapMember));

// var 2

let result = users.map (function(item,index) {
    let i = index + 1;
    return (`member ${i}:` + item);
})
console.log(result)

// var 3
let resultOne = users.map (function(item, index) {
    const i = index + 1;
    return (`member  ${i}: ${item}`);
})
console.log(resultOne)

// var 4
let resultPlus = users.map ((item,index)=> {
    let i = index + 1;
    return (`member ${i}:` + item);
})
console.log(resultPlus)




// #### Task 3 🖥

// С помощью метода **`filter`** создайте новый массив в котором не будет отрицательных чисел.

// ```javascript
//     const numbers = [7, -4, 32, -90, 54, 32, -21]
// ```

// // > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

// Решение 
const numbers = [7, -4, 32, -90, 54, 32, -21]

//1 способ 
function sortPlus (item) {
    if(item>=0) {
        return item
        // console.log(item)
    }
}
console.log(numbers.filter(sortPlus))

//2 способ 


const plus = numbers.filter ((item) => {
    if (item >= 0) {
        console.log (item)}
}
)


const plusResult =  numbers.filter (item => item>=0);
console.log (plusResult)


// #### Task 4 🖥

// Используя метод **`reduce`** получите сумму всех чисел массива.

// ```javascript
//     const fibonacci = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]
// ```

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

// Решение
const fibonaccI = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987]

let red = fibonaccI.reduce ((previousValue,item) =>{
    return item +previousValue},0)
console.log(red)



let fobo = fibonaccI.reduce (function(previousValue,item) {
    return  item = previousValue +item;
})
console.log(fobo)


function fibo(a,b) {
    return a +b}
    console.log(fibonaccI.reduce(fibo))

// лучше  не использовать
        console.log(fibonaccI.reduce (function(previousValue,item) {
        return  item=previousValue+item ;
        }
        ))


// #### Task 5 🖥

// Используя метод **`find`** найдите в массиве первое четное число.
//Используя метод **`find`** найдите в массиве первое четное число.
// ```javascript
//     const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
// ```

// > Реализуйте решение двумя способами, используя `function declaration` & `arrow function`.

const numberS = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]
// 1 способ
let resultNum= numberS.find (function(value) {
    if (value % 2 ===0)
    return value
})
console.log(resultNum)
// 2 способ
let resultNumElse = numberS.find( (value) => {
    if(value % 2 === 0) 
    return value;
})
console.log(resultNumElse)
// 3 способ

function resultNumPlus (item) {
    if( item % 2 === 0) {
        return item
    }
}
console.log(numberS.find(resultNumPlus))


// ### ADVANCED level

// #### Task 1 👨‍🏫

// + Написать функцию конструктор **Student**
// + В каждом объекте студента должны быть поля **salary** , **rate** , **name**
// + Внутри объекта также должен быть метод который на основе рейтинга возвращает сумму возможного кредита. 
// + На основе функции создать минимум 5 студентов и имя каждого студента должно соответствовать имени студента из вашей группы. 

// + Создать массив **students** и поместить в него студентов.
// + Написать функцию которая принимает массив студентов. И вычисляет общую сумму кредитов которую можно выдать группе.

// **rate** имеет 4 категории A B C D
// + **A** - отличный рейтинг и мы можем дать человеку кредит как 12 его зарплат
// + **B** - хороший рейтинг и мы можем дать человеку кредит как 9 его зарплат
// + **C** - неплохой рейтинг и мы можем дать человеку кредит как 6 его зарплат
// + **D** - плохой рейтинг и мы не можем дать кредит

// #### Task 2 👨‍🏫 Тролли атакуют наш раздел с комментариями!!!

// + Единственный способ справиться с этой ситуацией - удалить все гласные из комментариев троллей, нейтрализуя угрозу.
// + Ваша задача - написать функцию, которая принимает строку и возвращает новую строку с удаленными гласными.
// + Например, строка «This website is for losers LOL!» станет "Ths wbst s fr lsrs LL!".

// > Примечание: для этой задачи **`y`** не считается гласной.

// #### Task 3 👨‍🏫 Нет истории, нет теории

// + В приведенных ниже примерах показано, как написать функцию:

// ```javascript
//     accum("abcd") -> "A-Bb-Ccc-Dddd"
//     accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//     accum("cwAt") -> "C-Ww-Aaa-Tttt"
// ```

// > Параметр - это строка, которая включает только буквы от a..z и A..Z.

// #### Task 4 👨‍🏫 Самый высокий и самый низкий

// + В этом небольшом задании вам дается строка чисел, разделенных пробелами, и вы должны возвращать наибольшее и наименьшее число.

// ```javascript
//     highAndLow("1 2 3 4 5"); // return "5 1"
//     highAndLow("1 2 -3 4 5"); // return "5 -3"
//     highAndLow("1 9 3 4 -5"); // return "9 -5"
// ```

// > Строка вывода должна состоять из двух чисел, разделенных одним пробелом, при этом наибольшее число должно быть первым.

// #### Task 5 👨‍🏫 Изограммы

// + Изограмма - это слово, в котором нет повторяющихся букв, последовательных или непоследовательных. Реализуйте функцию, которая определяет, является ли строка, содержащая только буквы, изограммой. Предположим, что пустая строка является изограммой. Регистр букв мы игнорируем.

// ```javascript
//     isIsogram("Dermatoglyphics") == true
//     isIsogram("aba") == false
//     isIsogram("moOse") == false // -- ignore letter case
// ```

// #### Task 6 👨‍🏫 Считаем коды символов

// + Учитывая строку, превратите каждый символ в его код символа ASCII и соедините их вместе, чтобы создать число. Поместите результат в переменную **`total1`**

// + Затем замените все числа `7` на число `1` и назовите это число **`total2`**

// + После верните разницу между суммой цифр **`total1`** и **`total2`**

// > 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667

// #### Task 7 👨‍🏫 Дубликаты

// + Цель этого упражнения - преобразовать строку в новую строку, где каждый символ в новой строке равен 
// **`(`**, если этот символ появляется только один раз в исходной строке, или **`)`**, если этот символ встречается более одного раза в исходной строке. Игнорируйте использование заглавных букв при определении дубликата символа.


// ```javascript
//     "din" => "((("
//     "recede" => "()()()"
//     "Success" => ")())())"
//     "(( @" => "))(("
// ```