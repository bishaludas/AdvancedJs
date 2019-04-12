// Primitives
var a = 23;
var b = a;
a = 42;
/* 
console.log(a);
console.log(b);
 */


// object
var john = {
    'age' : 24,
    'gender' : 'M'
}

var jane = john;
john.age = 20;
/* 
console.log(john.age);
console.log(jane.age);

 */


//  First Class Functions 
// pass function as arguments

var years = [2017, 1995, 1970, 2005];

function calculateArr(arr, fn){
    var arrRes = [];
    for(i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2019 - el;
}

function isAdult(el){
    if(el >= 18){
        return "Is Adult";
    }else{
        return "Not Adult";
    }
}

/* 
var age = calculateArr(years, calculateAge);
console.log(age);

var adult = calculateArr(age, isAdult);
console.log(adult);

 */


//  57
// Functions returning function
function gadgetQuestion(gadget){
    if(gadget == "android"){
        return function(name){
            console.log(name + " , Why do you like android?");
        }
    }
    if(gadget == "apple"){
        return function(name){
            console.log(name + " , Why do you like apple?");
        }
    }
}
/* 
var apple = gadgetQuestion('apple');
apple('Naresh');
 */



//  IIFE : 58
(function(name){
    var hi = "hello, " + name;
    console.log(hi);
})('Bishal');
