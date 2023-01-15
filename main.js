// Write your code here

const input = require('sync-input');

console.log(`Welcome to Currency Converter!
1 USD equals 1 USD
1 USD equals 113.5 JPY
1 USD equals 0.89 EUR
1 USD equals 74.36 RUB
1 USD equals 0.75 GBP`)

while (true) {
    console.log(
        "What do you want to do?\n1-Convert currencies 2-Exit program");

    let next_step = Number(input());
    if (next_step === 2) break;
    if (next_step !== 1){
        console.log("Unknown input");
        continue;
    }

    console.log("What do you want to convert?");

    let currency_from = input("From: ");
    currency_from = currency_from.toUpperCase();

    let currency_from_val = getCurVal(currency_from);
    if (currency_from_val === -1) {
        console.log("Unknown currency");
        continue;
    }

    let currency_to = input("To: ");
    currency_to = currency_to.toUpperCase();

    let currency_to_val = getCurVal(currency_to);
    if (currency_to_val === -1) {
        console.log("Unknown currency");
        continue;
    }

    let amount = Number(input("Amount: "));

    if (isNaN(amount)) {
        console.log("The amount has to be a number");
        continue;
    } else if (amount < 1) {
        console.log("The amount cannot be less than 1");
        continue;
    }

    let final_amount = amount / currency_from_val;
    final_amount = final_amount * currency_to_val;
    final_amount = Number(final_amount).toFixed(4);

    console.log(`Result: ${amount} ${currency_from} equals ${final_amount} ${currency_to}`);
}

console.log("Have a nice day!");

function getCurVal(type){
    switch (type){
        case "USD": return 1;
        case "JPY": return 113.5;
        case "EUR": return 0.89;
        case "RUB": return 74.36;
        case "GBP": return 0.75;
        default: return -1;
    }
}