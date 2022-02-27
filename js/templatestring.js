var elm = document.getElementById("templateString");
elm.style.color = "#0174DF";
/*
let name = "Typescript";
let price = "30$";

//elm.innerHTML = '<div>Course name : <b>'+name+'</b>, price: <b style="color: red;">'+price+'</b></div>';
elm.innerHTML = `<div>Course name : <b>${name}</b>, price: <b style="color: red;">${price}</b></div>`;
*/

let todo={
    id:26,
    name: "play"
}

elm.innerHTML =    ` <div id="todo-id-${todo.id}">
                        <span class="name">${todo.name}</span>
                        </div>`;