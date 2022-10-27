vetorPilha = [1, 2, 3, 4, 5];
vetorAdiciona = [6, 7, 8, 9, 10];
vetorSoma = [];

for(let i = 0; i < vetorAdiciona.length; i++){
    vetorSoma[i] = vetorPilha[i] + vetorAdiciona[i];
}

console.log('A junção dos vetores resulta em: ', vetorSoma);