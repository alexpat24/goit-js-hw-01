const orderPieces = `7`;

const credits = 23580;
const pricePerDroid = 3000;
const CANCELED_BY_USER = "Отменено пользователем!";
const ACCESS_DENIED = "Недостаточно средств на счету!";

let totalPrice = orderPieces * pricePerDroid; // Write code on this line
let balanceCredit = credits - totalPrice; // Write code on this line
let message;

// Write code under this line
if (orderPieces === null) {
  message = CANCELED_BY_USER;
} else if (credits < totalPrice) {
  message = ACCESS_DENIED;
} else {
  message = `Вы купили ${orderPieces} дроидов, насчету осталось ${balanceCredit} кредитов`;
}

console.log(message);

// else if (balanceCredit < 0){message = ACCESS_DENIED;}
