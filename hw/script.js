//Змінні
let ibanez = 15.678;
let gibson = 123.965;
let fender = 90.2345;

//Використовуючи вбудований об'єкт Math – виведіть максимальне число
console.log(Math.max(ibanez, gibson, fender));

//Використовуючи вбудований об'єкт Math – виведіть мінімальне число
console.log(Math.min(ibanez, gibson, fender));

//Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
let guitars = ibanez + gibson + fender;
console.log(guitars);

//Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.
ibanez = Math.floor(ibanez);
gibson = Math.floor(gibson);
fender = Math.floor(fender);
guitars = ibanez + gibson + fender;
console.log(guitars);

//Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
console.log(Math.round(guitars / 100) * 100);

//Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
if (guitars % 2 === 0) {
    console.log("Парне");
} 
else {
    console.log("Непарне");
}

