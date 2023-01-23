const total = 100;
const order = prompt('Введите количество товаров для заказа');

let response;
order > total ? console.log('На складе недостаточно товаров!') : console.log('Заказ оформлен, с Вами свяжется менеджер!');