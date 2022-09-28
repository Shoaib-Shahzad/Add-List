function AddList(){
let givename = document.getElementById("boxname").value;
let Box = document.getElementById("box");

let li = document.createElement("li");
li.textContent = givename;

let a = document.createElement("a")
a.textContent = "X";
a.style.textDecoration = "none";
li.appendChild(a);

let pos = Box.firstElementChild;
if(pos==null){Box.appendChild(li);}
else{Box.insertBefore(li,pos)}

document.getElementById("boxname").value = "";
document.getElementById("boxname").focus();
document.getElementById("count").innerHTML = Box.childElementCount;
}

let btn = document.querySelector("ul");
btn.addEventListener('click', function(e){
let box = document.getElementById("box");
let li = e.target.parentNode;
box.removeChild(li);

document.getElementById("count").innerHTML = box.childElementCount;
})