// CLOSURES 59 
function interview(job){
    return function(name){
       if(job == "dev"){
           return name + ' is a ' + job;
       }

       if(job == "teacher"){
        return name + ' is a ' + job;
        }

        if(job == "accountant"){
            return name + ' is a ' + job;
        }
    }
}



var john = interview('dev');
var bob = interview('teacher');
var jane = interview('accountant');

console.log(john('John'));
console.log(bob('Bob'));
console.log(jane('Jane'));