/* class 
class Student {
    constructor(id, name, age){
        this.id = id;
        this.name = name;
        this.age = age;
    }
    showInfo(){
        return this.id +" - " +this.name +" - " + this.getAge();
    }
    getAge(){
        let today =  new Date();
        let year = today.getFullYear();
        return year - this.age;
    }
}

let studentObj = new Student("01", "a", "1981");
console.log(studentObj);

console.log(studentObj.showInfo());
*/

/* inheritance */

class Person {
    constructor(name, code, age){
        this.name = name;
        this.code = code;
        this.age = age;
    }
    showInfo(){
        console.log( this.code +" - " +this.name +" - " + this.getAge());
    }
    getAge(){
        let today =  new Date();
        let year = today.getFullYear();
        return year - this.age;
    }
}

class Student extends Person{
    constructor(name, code, age, score){
        super(name, code , age);
        this.score = score;
    }
    showInfo(){
        super.showInfo();
        console.log("-"+ this.score);
    }
}

let studentObj = new Student("hiii","001",2000,80);
studentObj.showInfo();