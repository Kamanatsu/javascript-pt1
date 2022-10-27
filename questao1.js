Array.isArray([]);
function verifica(obj){
    ver = Array.isArray(obj);
    console.log("E uma string: ",ver);
}

obj = new Array('macaco','jumento')

verifica(obj);
