/* 
let arr = [133, "ES6", false];

let id = arr[0];
let name = arr[1];
let free = arr[2];

let [id, name, free ] =arr;
console.log(id + "-"+ name +"-"+free); 
*/

let objCourse ={
    id:456,
    name: "ES6",
    free: false,
}
let{name, id, free} = objCourse;
console.log(id + "-"+ name +"-"+free ); 