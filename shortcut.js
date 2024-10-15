let myVar = 5;
if(myVar){
  myVar = myVar * 100;
}
else{
    myVar = 0;
}
// console.log(myVar);

let myMoney = 50;

// you check negative or falsy anything
if(!myMoney){

}
else{

}



const money = 180;
let food;
if(money > 100){
    food = 'biriyani'
}
else{
    food = 'chaa'
}
// shortcut

let food1 = money > 100 ? 'biriyani' : 'chaa';
// console.log(food1);

let drink = (money > 80 && myVar > 50) ? 'khabo' : 'khabo na';
// console.log(drink);


// shortcut num to string
const num1 = 52;
console.log(num1);
const numStr = num1 + '';
// console.log(numStr);

// shortcut string to num
const input = '560';
const inputNum = +input;
// console.log(inputNum);\

// 

let isActive = true;
const showUser =()=> console.log('display user');
const hideUser =()=> console.log('hide user');;

isActive ? showUser() : hideUser();

// toggole
isActive = !isActive;







