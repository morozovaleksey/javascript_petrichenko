'use strict';

let money = +prompt("Ваш бюджет на месяц?","70000");
let time = prompt("Введите дату в формате YYYY-MM-DD","1999-12-12");
let expensesArticle = prompt("Введите обязательную статью расходов в этом месяце","Квартира");
let expensesValue = +prompt("Во сколько обойдется?","30000");
let expenses = {
    [expensesArticle]: expensesValue
};
let budgetOneDay = (money - expensesValue)/30;
budgetOneDay = budgetOneDay.toFixed();
console.log(money);
console.log(time);
console.log(expenses); 
alert("Бюджет на день = "+budgetOneDay);


let appData = {
    money: money,
    timeData: time,
    expenses:expenses,
    optionalExpenses: "",
    income:[],
    savings: false
}