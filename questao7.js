lista = [1, 2, 3, 4, 5, 6, 5, 8, 9, 10, 11, 12, 13, 14, 5, 16, 17, 12, 19, 5];
ajuda = [];
let contador = 0;
let contadorant = 0;

for(let i = 0; i < lista.length; i++){
    contadorant = contador;
    for(let n = 0; n < lista.length; i++){
        contador = 0;
        if(lista[i] == lista[n]){
            contador++;
        }
    }   
    if(contador > contadorant){
        maior = lista[i];
    }else{
        contador = contadorant;
    }
}

console.log('o elemento que mais se repete e: ',maior);