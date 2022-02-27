// Default params
function showInfo(name ="ES6", price=20){
    return `Course name:<b> ${name}</b>, price: <b>${price}</b>`;
}
var dom = document.getElementById("mFunction");
    dom.style.color="#0714DF"
    dom.innerHTML = showInfo();

//Rest Parameters
function caculate(action, ...values){
    let result =0;
    console.log(values);
    switch(action){
        case '+':
            for(let value of values) result +=value;
            break;
        case '-':
            for(let value of values) result -=value;
            result+=values[0];
            break;
    }
    return result;
}

console.log(caculate("-", 2, 3, 5, 2));

// Arrow Functions
function fun01(name, age){
    return `My name: ${name}, Age: ${age} years old`;
}

var fun02 = function(name, age){
    return `My name: ${name}, Age: ${age} years old`;
}

var fun03 = (name, age) => {
    return `My name: ${name}, Age: ${age} years old`;
}

var fun04 = (name, age) => 
    `My name: ${name}, Age: ${age} years old`;

var fun05 = name=> 
    `My name: ${name}`;

var fun06 = ()=> 
    `My name:`;

console.log(fun06("john", 69));

let course01 =["Android", "java", "php", "angular"];
//////////////////////////////////////////////////
console.log(
    course01.map(course01 =>{
        return course01.toUpperCase();
    })
)
 let scores = [9,2,8,4,3,1,8];
 scores.sort(
     (x, y) =>  x > y ? true : false
 );
 console.log(scores);
// THIS
/*
let student = {
    namethis: "John",
    course: ["Android", "PHP", "Java"],
    showInfo: function(){
        var _this = this; 
        this.course.forEach(function(course){
            console.log(`${_this.namethis} study ${course}`);
        })
    }
}

student.showInfo();

let student = {
    namethis: "John",
    course: ["Android", "PHP", "Java"],
    showInfo: function(){ 
        this.course.forEach(function(course){
            console.log(`${this.namethis} study ${course}`);
        }.bind(this))
    }
}
*/

let student = {
    namethis: "John eo",
    course: ["Android", "PHP", "Java"],
    showInfo: function(){ 
        this.course.forEach((course) => {
            console.log(`${this.namethis} study ${course}`);
        })
    }
}


student.showInfo();