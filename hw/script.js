const ibanez = 15.678;
const gibson = 123.965;
const fender = 90.2345;

const maxPrice = Math.max(ibanez, gibson, fender);
console.log("Максимальна ціна:", maxPrice);

const minPrice = Math.min(ibanez, gibson, fender);
console.log("Мінімальна ціна:", minPrice);

const guitars = ibanez + gibson + fender;
console.log("Загальна вартість:", guitars);

const floorIbanez = Math.floor(ibanez);
const floorGibson = Math.floor(gibson);
const floorFender = Math.floor(fender);
const floorGuitars = floorIbanez + floorGibson + floorFender;
console.log("Округлена ціна:", floorGuitars);

const roundPrice = Math.round(floorGuitars / 100) * 100;
console.log("Округлена до сотень ціна:", roundPrice);

function oddEven(floorGuitars) {
if (floorGuitars % 2 === 0)
    return "Загальна вартість є парним числом";
else
    return "Загальна вартість є непарним числом";
}
console.log(oddEven(floorGuitars));

const customerMoney = 500;
const customerChange = customerMoney - guitars;
console.log("Решта з 500грн:", customerChange);

const averagePrice = +((ibanez + gibson + fender) / 3).toFixed(2);
console.log("Середня ціна:", averagePrice);

const discount = Math.round(Math.random() * 100) / 100;
const discountPercentage = Math.trunc(discount * 100);
const discountUah = +(guitars * discount).toFixed(2);
const discountPrice = +(guitars - (guitars * discount)).toFixed(2);
console.log("Знижка:", discountPercentage, "%");
console.log("Ціна зі знижкою:", discountPrice);

const cost = +(guitars / 2).toFixed(2);
const profit = +(cost - discountUah).toFixed(2);
console.log("Собівартість:", cost);
console.log("Чистий прибуток:", profit);

console.log(`Максимальна ціна: ${maxPrice}
Мінімальна ціна: ${minPrice}
Загальна вартість: ${guitars}
Округлена ціна: ${floorGuitars}
Округлена до сотень ціна: ${roundPrice}
${oddEven(floorGuitars)}
Решта з 500грн: ${customerChange}
Середня ціна: ${averagePrice}
Знижка: ${discountPercentage} %
Ціна зі знижкою: ${discountPrice}
Собівартість: ${cost}
Чистий прибуток: ${profit}`)