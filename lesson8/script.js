let num = 50;

if(num < 49) {
    console.log("Неверно");
} else if(num > 100) {
    console.log("Много");
} else {
    console.log("Верно");
}

(num == 50) ? console.log("Верно") : console.log("Неверно"); //тернарный оператор

// чтобы в switch сработали операторы сравнение, нужно вместо num поставить true
switch(true) {
    case num < 49:
        console.log("Неверно");
        break;
    case num > 100:
        console.log("Много");
        break;    
    case num == 50: // необязательно ставить 50!
        console.log("Верно");
        break;
    default:
        console.log("What happens?");
        break;                 
}