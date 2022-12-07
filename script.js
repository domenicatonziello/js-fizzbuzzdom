console.log('JS OK');

/*
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
per i multipli di 3 stampi “Fizz” al posto del numero
per i multipli di 5 stampi “Buzz” al posto del numero.
per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.
*/

/*
1. Prendere elementi dal DOM;
2. Generare numeri da 1 a 100;
3. Stampare 'fizz' al posto dei multipli di 3;
4. Stampare 'Buzz' al posto dei multipli di 5;
5. Stampare 'FizzBuzz' al posto dei multipli di 3 e di 5;
6. Stampare in console
*/ 

// Prendere elementi dal DOM:
const container = document.querySelector('.container');
// Preparare il blocco
let blockList =  `<ul class="block-list">`;

// Generare numeri da 1 a 100:
for (let i= 1; i <= 100; i++){
    if( (i % 3 === 0) && ( i % 5 === 0)){
        // const fizzBuzz = "fizzbuzz"
        blockList += `<li class= "bg-pink"> fizzBuzz </li>`;
    }
    else if (i % 3 === 0){
        // const fizz = 'Fizz';
        blockList += `<li class = "bg-aqua"> fizz </li>`;
    }
    else if(i % 5 === 0) {
        // const buzz = 'Buzz';
        blockList += `<li class = "bg-yellow"> buzz </li>`;
    }
    else{
        blockList += `<li class= "bg-blue"> ${i}</li>`;
    }
}

// chiudo blocco 
 blockList += `</ul>`;
//  stampo blocco in pagina:
container.innerHTML = blockList;
