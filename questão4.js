lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];


function ultimas(n){
    primeiro = lista.length - n;
    for(let i = 0; i < primeiro; i++){
        lista.shift();
    }
    return lista;
}

ultimas(5);