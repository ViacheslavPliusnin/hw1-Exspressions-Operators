const ibanez = 15.678;
const gibson = 123.965;
const fender = 90.2345;

console.log("Максимальна ціна:", Math.max(ibanez, gibson, fender));

console.log("Мінімальна ціна:", Math.min(ibanez, gibson, fender));

const guitars = ibanez + gibson + fender;
console.log("Загальна вартість:", guitars);

const floorIbanez = Math.floor(ibanez);
const floorGibson = Math.floor(gibson);
const floorFender = Math.floor(fender);
const floorGuitars = floorIbanez + floorGibson + floorFender;
console.log("Округлена ціна:", floorGuitars);

console.log("Округлена до сотень ціна:", Math.round(floorGuitars / 100) * 100);

if (floorGuitars % 2 === 0) {
    console.log("Загальна вартість є парним числом");
} 
else {
    console.log("Загальна вартість є непарним числом");
}

const customerMoney = 500;
console.log("Решта з 500грн:", customerMoney - guitars);

const averagePrice = (ibanez + gibson + fender) / 3;
console.log("Середня ціна:", +averagePrice.toFixed(2));

const discount = Math.round(Math.random() * 100) / 100;
const discountPercentage = Math.trunc(discount * 100);
const discoutUah = +(guitars * discount).toFixed(2);
console.log("Знижка", discountPercentage, "%");
console.log("Ціна зі знижкою:", +(guitars - (guitars * discount)).toFixed(2));

const profit = +(guitars / 2).toFixed(2);
console.log("Собівартість:", profit);
console.log("Чистий прибуток:", +(profit - discoutUah).toFixed(2));

