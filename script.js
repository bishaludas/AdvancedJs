// Object oriented programming

/* var Person = function(name, dob, job){
    this.name = name;
    this.dob = dob;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    console.log(2019 - this.dob);
}

var john  = new Person("John", 1990, 'Teacher');
john.calculateAge(); */



var Student = function(name, semester, faculty, gender, grade){
    this.name = name;
    this.semester = semester;
    this.faculty = faculty;
    this.gender = gender;
    this.grade = grade;
}

Student.prototype.calculateGrade = function(){
    if(this.grade < 3.5){
        console.log("B");
    }
    if(this.grade > 3.7){
        console.log("A");
    }
}

var Bishal = new Student('Bishal', 8, 'CSIT', 'M', 3.9);
console.log(Bishal);
Bishal.calculateGrade();


