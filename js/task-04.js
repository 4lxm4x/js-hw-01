let credits = 23580;
const pricePerDroid = 3000;
const droidOrder = prompt('Please input quantity of droids you want to purchase');
if (droidOrder===null) {
  console.log('Canceled by user');
}
else {
  const totalPrice = pricePerDroid*droidOrder;


if (totalPrice>credits) {
  console.log('Insufficient funds!');
}
else {
  credits -=totalPrice;
  console.log(`You purchased ${droidOrder} droids, you have ${credits} credits remained.`);
}
}