//Declaración e inicialización variables booleanas
let A = false;
let B = true;

//Diseño CSS a aplicar en consola (Encabezado)
const myCssHead = `
    background: #20261F;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    border: 1px solid #aaa;
    color: #F2F8FA;
`;

//Diseño CSS a aplicar en consola (Cuerpo)
let myCssBody = `
    background: #99AA98;
    font-family: cursive;
    border: 1px solid #aaa;
    color: #1C9C16;
`;

// console.log(A && B);

// console.log(5>3 && 5>=5);
//          true && true
//               true

// console.log(`A:`,A,` (OPERADOR OR) B:`,B,` A || B =`,A || B);
// console.log(`Variable A:`,A,`|| Variable B:`,B, `A OR B=`,A||B)
// OPERADOR AND (&&)

//Consulta y llenado tabla por el id de la misma en el html
let tabla = document.querySelector("#myTablaAND");
tabla.innerHTML = `
    <tr>
        <td>${!(!A)}</td>
        <td>${!B}</td>
        <td>${!(!A) && !B}</td>
    </tr>
    <tr>
        <td>${A}</td>
        <td>${B}</td>
        <td>${A && B}</td>
    </tr>
    <tr>
        <td>${  !A}</td>
        <td>${!B}</td>
        <td>${!A && !B}</td>
    </tr>
    <tr>
        <td>${!A}</td>
        <td>${B}</td>
        <td>${!A && B}</td>
    </tr>
    <tr>
        <td>${A}</td>
        <td>${B}</td>
        <td>Datos verdaderos</td>
    </tr>
`;

//Impresión por consola
console.log(`%cOperadores AND \n`, myCssHead);
console.log(`%c1. A: ${!(!A)} (OPERADOR AND) B: ${!B} A && B = ${!(!A) && !B}`,myCssBody);
console.log(`%c2. A: ${A} (OPERADOR AND) B: ${B} A && B = ${A && B}`,myCssBody);
console.log(`%c3. A: ${!A} (OPERADOR AND) B: ${!B} A && B = ${!A && !B}`,myCssBody);
console.log(`%c4. A:${!A} (OPERADOR AND) B:${B} A && B = ${!A && B}`,myCssBody);
console.log(`%cA: ${A} B: ${B} Datos verdaderos \n`,myCssBody);

// console.log(tabla)

// Operador OR (||)
let tablaOR = document.querySelector("#myTablaOR");
tablaOR.innerHTML = `
    <tr>
        <td>${!(!A)}</td>
        <td>${!B}</td>
        <td>${!(!A) || !B}</td>
    </tr>
    <tr>
        <td>${A}</td>
        <td>${B}</td>
        <td>${A || B}</td>
    </tr>
    <tr>
        <td>${!A}</td>
        <td>${!B}</td>
        <td>${!A || !B}</td>
    </tr>
    <tr>
        <td>${!A}</td>
        <td>${B}</td>
        <td>${!A || B}</td>
    </tr>
    <tr>
        <td>${A}</td>
        <td>${B}</td>
        <td>Datos verdaderos</td>
    </tr>
`;
console.log(`%cOperadores OR \n`, myCssHead);
console.log(`%c1. A: ${!(!A)} (OPERADOR OR) B: ${!B} A || B = ${!(!A) || !B}`,myCssBody);
console.log(`%c2. A: ${A}  (OPERADOR OR) B: ${B} A || B = ${A || B}`,myCssBody);
console.log(`%c3. A: ${!A} (OPERADOR OR) B: ${!B} A || B = ${!A || !B}`,myCssBody);
console.log(`%c4. A: ${!A} (OPERADOR OR) B: ${B} A || B = ${!A || B}`,myCssBody);
console.log(`%cA: ${A} B: ${B} Datos verdaderos \n`, myCssBody);

// Operador NOT (!)
let tablaNOT = document.querySelector("#myTablaNOT");
tablaNOT.innerHTML = `
    <tr>
        <td>${A}</td>
        <td></td>
        <td>${!A}</td>
    </tr>
    <tr>
        <td></td>
        <td>${B}</td>
        <td>${!B}</td>
    </tr>
`;
console.log(`%cOperadores NOT \n`, myCssHead);
console.log(`%cA: ${A} OPERADOR NOT A= ${!A}`,myCssBody);
console.log(`%cB: ${B} OPERADOR NOT B= ${!B}`,myCssBody);
