let todoArr = [
    "play",
    "coding",
    "study"
];
/* Cách viêt thứ nhất
console.log(todoArr);
let length = todoArr.length;
for(let i =0; i<length; i++){
    console.log(todoArr[i]);
}
*/

/* cách 2 sử dụng for in... index lấy số thứ tự trong mảng
for(let index in todoArr){
    console.log(index+": "+todoArr[index]);
}
*/
/* cách 3 sử dụng for of ... lấy nội dung của mảng
for(let todo of todoArr){
    console.log(todo);
} 
*/

let todoObj={
    id:26,
    name: "play"
}
for(let index in todoObj){
    console.log(index+": "+todoObj[index]);
}
