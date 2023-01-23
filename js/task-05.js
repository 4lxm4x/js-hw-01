const country = prompt('Please enter country for delivery');
const countryNorm=country.toLowerCase();
let price;
switch (countryNorm) {
  case 'china': {
    price=100;
    break;
  }
case 'chile': {
    price=250;
    break;
  }
  case 'austria': {
    price=170;
    break;
  }
  case 'india': {
    price=80;
    break;
  }
case 'jamaica': {
    price=130;
    break;
  }
    case 'ukraine': {
    price=0;
    console.log ('Slava Ukraini!')
    break;
  }
  default: {
    console.log('Your country is unavailable for delivery');
    break;
  }

}

if (price!==undefined) {
  console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
}
