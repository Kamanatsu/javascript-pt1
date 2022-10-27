number = 02546;

for(let i = 0; i < number.length; i++){
    if(number[i]%2 == 0){
        contador++
    };
    if(contador == 2){
        number.splice(number[i],0,'-');
    }
}

console.log(number);


