// let nam = Number(prompt("enter name"));
// console.log(nam);
let h2=document.querySelector("h2");
console.dir(h2.innerText)
h2.innerText=h2.innerText +" from apna college students";
console.log("hello");
window.console.log("hello1")
console.dir(document.body)
// console.dir(document.body.firstChild)
let div=document.querySelector("div");
console.dir(div)
let divs=document.querySelectorAll(".box")
console.log(divs)
divs[0].innerText="new value";
// same work as line 14 but useful for large data.
let idx=1;
for (div of divs){
    div.innerText=`new value ${idx}`;
    idx++;
}

// let num1=2;
// num2=String("44");

// console.log(num1,num2);
// console.log(num1+num2);

// let int= Number(prompt("enter a number"));

// if (int > 30){
//     alert("you are welcomed");
// }
// else {
//     alert("you are a kid");
// }