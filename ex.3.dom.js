const buttonP = document.getElementById("but+");
const buttonM = document.getElementById("but-");
let number = document.getElementById("nr");

var a = 0;
number.innerHTML = a;

function adunare() {
  a = a + 1;
  number.innerHTML = a;
}

function scadere() {
   if (a > 0){
     a = a - 1;
     number.innerHTML = a;
    } else {
      number.innerHTML = "error";
    };
}

buttonP.addEventListener('click', adunare);
buttonM.addEventListener('click', scadere);