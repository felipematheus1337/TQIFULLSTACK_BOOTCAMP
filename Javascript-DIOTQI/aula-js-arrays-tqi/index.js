

let array =  ['string',1,true,['array1'],['array2'],['array3']];
console.log(array)


console.log(array[3])

//for each
array.forEach(function(item,index){console.log(item,index)})


//pop
array.pop();

//shift
array.shift();

//unshift
array.unshift();


//indexof
console.log(array.indexOf(true));



//splice
array.splice(0,3);


//slice
let novoArray = array.slice(0,3);


let object = {string: 'string',number: 1,boolean : true, Array: ['array'],objectInterno: {objInterno: 'objeto interno'}}

console.log(object.boolean)

var {string, boolean, objectInterno} = object
console.log(string,boolean,objectInterno);
