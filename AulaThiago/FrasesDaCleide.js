function frasesTiaCleide() {
    let frases = 
    ([
        {
            frase: "Acredite no seu potencial e na sua capacidade de vencer. Bom dia!",
            autor: "Tia Cleide",
        },
        {
            frase: "Só quem corre atrás dos seus objetivos é capaz de atingir o sucesso. Bom dia!",
            autor: "Tia Cleide",
        },
        {
            frase: "Bom dia. Mais uma manhã está raiando e com ela uma nova chance de ser feliz e realizar seus sonhos!",
            autor: "Tio Aldemiro feat: Tia Cleide",
        }
    ]);
    //mostra todas as frases do array
    console.log(frases);

    //mostra a frase na posição 2 do array
    console.log(frases[2]);

    //listSize recebe o tamanho total da lista
    let listSize = frases.length;
    console.log(`Tamanho da lista: ${listSize}`);

    //sortearFrase, algoritimo que sorteia um numero do tamanho da lista
    let sortearFrase = Math.floor(Math.random() * listSize - 0 + 1);
    console.log(`Valor sorteado: `, sortearFrase);

    //mostra a frase sorteada
    console.log(`A frase sorteado é: `, frases[sortearFrase]);
};
frasesTiaCleide();