numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
copia = [];
function retorna(n){
    for(let i = 0; i<n; i++){
        copia[i] = numeros[i];
    }
    console.log('os primeiros n elementos são: ',copia);
}

retorna(3);