'use strict';

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?","70000");
    time = prompt("Введите дату в формате YYYY-MM-DD","1999-12-12");

    while(isNaN(money) || money == "" || money == null ) {
        money = +prompt("Ваш бюджет на месяц?","70000");
    }
}

start();


let budgetOneDay = money/30;
budgetOneDay = budgetOneDay.toFixed();

let appData = {
    budget: money,
    timeData: time,
    expenses:{},
    optionalExpenses: {},
    income:[],
    savings: true
}

function choseExpenses() {
    for(let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце","");
        let b = +prompt("Во сколько обойдется?","");
    
        if(typeof(a) == "string" && typeof(a) != null && typeof(b) != null
         && typeof(a) != "" && typeof(b) != "" && a.length < 50) {
            appData.expenses[a] = b;
        } else {
    
        }
    }
}

choseExpenses();

appData.moneyPerDay = +(appData.budget / 30).toFixed();
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

function checkSavings() {
    if(appData.savings == true) {
        let save = +prompt("Какова сумма накоплений","200000"),
            percent = +prompt("Под какой процент?", "7");

        appData.monthIncome = save/100/12*percent;   
        
        console.log("Доход в месяц с депозита: " + appData.monthIncome);
    }
}

checkSavings();