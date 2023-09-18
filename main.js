import "./style.css";

//let patron = new RegExp('a$');
// Cadena de input
//const cadena = "aprendiendo expresiones regurales";

//let patron = /expresiones/;

const expRegular= document.createElement('input');
expRegular.id="expresion";
expRegular.placeholder="Inserta tu patron";

const frase=document.createElement('input');
frase.id="frase";


const button=document.createElement('button');
button.textContent="Check";
button.onclick=RegExp;
button.className='check'

const regularExpGen=document.getElementById('expresion');

let myPattern=RegExp(regularExpGen);
const parrafo = document.createElement("p");

if (myPattern.test(frase)) {
  parrafo.textContent = "Si hizo match";
} else {
  parrafo.textContent = "No hizo match";
}


expresiones.appendChild(expRegular);
expresiones.appendChild(frase);
expresiones.appendChild(button);
document.body.appendChild(parrafo);

