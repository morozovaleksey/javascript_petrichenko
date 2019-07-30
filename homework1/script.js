'use strict';

let money = +prompt("Ваш бюджет на месяц?","70000");
let time = prompt("Введите дату в формате YYYY-MM-DD","1999-12-12");
let budgetOneDay = money/30;
budgetOneDay = budgetOneDay.toFixed();

let appData = {
    budget: money,
    timeData: time,
    expenses:{},
    optionalExpenses: {},
    income:[],
    savings: false
}

for(let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце","");
    let b = +prompt("Во сколько обойдется?","");

    if(typeof(a) == "string" && typeof(a) != null && typeof(b) != null
     && typeof(a) != "" && typeof(b) != "" && a.length < 50) {
        appData.expenses[a] = b;
    } else {

    }
}

// let i = 0;
// while(i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце","");
//     let b = +prompt("Во сколько обойдется?","");

//     if(typeof(a) == "string" && typeof(a) != null && typeof(b) != null
//      && typeof(a) != "" && typeof(b) != "" && a.length < 50) {
//         appData.expenses[a] = b;
//     } else {

//     }
//     i++;
// }
appData.moneyPerDay = (appData.budget / 30).toFixed();
console.log("Бюджет на день = " + budgetOneDay);

if(appData.moneyPerDay < 100) {
    console.log("Минимальный уровень");
} else if(appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень");
} else if(appData.moneyPerDay > 2000) {
    console.log("Высокий уровень");
} else {
    console.log("Error!!!");
}
console.log(appData);