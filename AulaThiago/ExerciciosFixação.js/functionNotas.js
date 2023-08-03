/*
Transformar notas escolares
Crie um algoritimo que transformme 
as notas dos sistema numérico para sistema de 
notas em caracteres tipo AbortController.

------PARAMETROS----
* DE 90 PRA CIMA = A;
* ENTRE 80 - 89 = B;
* ENTRE 70 - 79 = C;
* ENTRE 60 - 69 = D;
* MENOR QUE 60 - F;
*/

function Notas(nota) {

let notafinal = '';

    if (nota < 0 || nota > 100) {
        notafinal = ('Selecione uma nota entre "0" e "100"');
    }
    else if (nota >= 90) {
        notafinal = 'A';
    }
    else if (nota >= 80) {
        notafinal = 'B';
    }
    else if (nota >= 70) {
        notafinal = 'C';
    }
    else if (nota >= 60) {
        notafinal = 'D';
    }
    else {
        notafinal = 'F';
    }

    return notafinal;
}

console.log(Notas(60));
console.log(Notas(75));
console.log(Notas(89));
console.log(Notas(99));
console.log(Notas(999));