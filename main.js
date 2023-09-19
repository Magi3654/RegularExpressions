const btn = document.querySelector("#clickBtn");
const btn2 = document.querySelector("limpiarBtn");
const pTag = document.querySelector(" .result ");
let generalInput = document.getElementById("generalInput");
let myString = generalInput.value;
const regPattern = RegExp("baja", "gimu");
btn.addEventListener("click", (e) => {
  const result = myString.match(regPattern);
  if (result) {
    pTag.innerHTML = "Coincidencia: " + result[0];
  } else pTag.innerHTML = "Coincidencia: 0";
});

btn2.addEventListener("limpiar", (e) =>{
  myString.value=" ";
  result.value=" "
});

////console.log(regPattern.test(myString));// boolean
//console.log(regPattern.exec(myString));// este es el array
console.log(myString);
//console.log(result);
