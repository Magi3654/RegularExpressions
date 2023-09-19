const btn = document.querySelector("#clickBtn");
const btn2 = document.getElementById("limpiarBtn");
const pTag = document.querySelector(" .result ");
let generalInput = document.getElementById("generalInput");
let expresionR = document.getElementById("expresion");
let flags = document. getElementById("flag");
btn.addEventListener("click", (e) => {
  let myString = generalInput.value;
  let expresionRV=expresionR.value;
  let expFlag=flags.value;
  const regPattern = RegExp(expresionRV, expFlag);
  const result = myString.match(regPattern);
  if (result) {
    pTag.innerHTML = `Coincidencia: ${result.length}; ` +`${result}`;
  } else pTag.innerHTML = "Coincidencia: 0";
});

limpiarBtn.addEventListener("click", () => {
  generalInput.value = "";
  expresionR.value = "";
  pTag.innerHTML="";
});



// falta hponer el numero de conincidencias



