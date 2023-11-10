//-------------
//Esercizio 2
//-------------
const riempiArray = (numeroElementi, valoreMinimo, valoreMassimo) => {
    const array = [];

    for (let i = 0; i < numeroElementi; i++) {
        const numeroCasuale = Math.floor(
            Math.random() * (valoreMassimo - valoreMinimo + 1) + valoreMinimo
        );
        array.push(numeroCasuale);
    }
    return array;
};

// let risultato = riempiArray(10, 5, 10);
// console.log(risultato);

const contaPariDispari = (array) => {
    let pariDispari = { pari: 0, dispari: 0 };
    console.log(array);
    for (let i = 0; i < array.length; i++) {
        let arrayI = array[i];
        if (arrayI % 2 === 0) {
            pariDispari.pari += 1;
        } else if (arrayI % 2 !== 0) {
            pariDispari.dispari += 1;
        }
    }
    return pariDispari;
};

let conteggio = contaPariDispari(riempiArray(10, 5, 10));
console.log(conteggio);

//-------------
//Esercizio 1
//-------------
