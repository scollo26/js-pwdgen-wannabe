
/*Descrizione esercizio:
1 Chiedi all’utente il suo nome,
2 poi chiedi il suo cognome,
3 poi chiedi il suo colore preferito
4 Infine scrivi sulla pagina nomecognomecolorepreferito21*/

// Vi lascio il bonus per oggi:
// chiediamo all'utente anche il suo numero preferito
// al numero preferito sommiamo 5
// attacchiamo alla password, al posto del 21, il risultato









let nome =prompt('inserisci nome');
console.log(nome);

let cognome =prompt('inserisci cognome');
console.log(cognome);

let colore =prompt('inserisci colore preferito');
console.log(colore);

let numeroPreferito =prompt('inserisci numero preferito');
console.log(colore);


const numero =parseInt(numeroPreferito) + 5 ;
console.log(numero);


let password = ` <h1>La tua password è </h1> ${nome}${cognome}${colore}${numero}  `;

console.log(password);


// let testo_completo = testo + numero;
// console.log(testo_completo);


// document.write(testo, numero );

// document.getElementById("my-id").innerHTML = testo + numero;

document.getElementById("my-id").innerHTML = password;
















