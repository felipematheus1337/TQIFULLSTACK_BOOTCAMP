const numbers = [1,2,3]
function sum(x,y,z){
    return x + y + z;
}


console.log(sum(...numbers))



function verifica(...args) {
    console.log(args.length)
}



verifica(numbers)


//Object Destructuring
const user = {
    id: 77,
    displayName: 'jdoe',
    fullName: {
        firstName:'Felipe',
        lastName:'Saiyajin'
    }
};

function userId({id}) {
    return id;
}

function getFullName({fullName: {firstName:first,lastName:last}}) {
    return `${first} ${last}`
}

console.log(userId(user));

console.log(getFullName(user));
