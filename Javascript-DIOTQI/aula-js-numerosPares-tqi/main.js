function verificaNumber(num) {
    let newArray = [];
    if(num === null) {
      let valor = -1
      return valor;
    }

    for(let i = 0; i <num.length; i++) {
        if(num[i] % 2 != 0 ) {
         newArray.push(num[i]);
        }
        else if (num[i] % 2 == 0) {
            newArray[i] = 0;
        }
    }
    return newArray;
}


let num = [1,3,4,6,80,33,23,90]



console.log(verificaNumber(num) )
