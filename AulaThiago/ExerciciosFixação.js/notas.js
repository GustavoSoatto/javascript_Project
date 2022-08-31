// 1º) Criar um sistema de notas escolares.
// Criar um algoritmo que transforme as notas do sistema
// numérico para sistema de notas em caractere, tipo A,
// B, C
// De 90 para cima A
// Entre 80 e 89 B
// Entre 70 e 79 C
// Entre 60 e 69 D
// Menor que 60 F

let nota = 60;

if (nota < 0 || nota > 100){
    console.log('Selecione uma nota entre "0" e "100"')
}
else if (nota >= 90){
    console.log('A');
}
else if (nota >= 80){
    console.log('B');
}
else if (nota >= 70){
    console.log('C');
}
else if (nota >= 60){
    console.log('D');
}
else {
    console.log('F');
}