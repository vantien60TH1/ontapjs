/*===Property value shorthand=== 
function getCourse(name, price, free){
    return{
        name: name,
        price: price,
        free: free
    }
}
console.log(getCourse("ES6", 5, false));*/
/*===Method Properties=== */
function getCourse(name, price, free){
    return{
        name,
        price,
        free,
        showInfo: function(){
            console.log(`${name+" - "+price+" - "+free}`);
        },
        showInfo2(){
            console.log(`${name+" - "+price+" - "+free}`);
        },
        showInfo3(delimiter = "-"){
            console.log(`${name+delimiter+price+delimiter+free}`);
        }
    }
}

var myCourse = getCourse("ES6", 20, false);
myCourse.showInfo3();
console.log(myCourse);

/*===Computed Properties Names=== */
let propPrefix = "support_"
let boots = {
    [propPrefix+"chrome"]: true,
    [propPrefix+"ie"]: true,
    [propPrefix+"firefox"]: false
}
console.log(boots);