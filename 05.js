// String a ser revertida
let original = "Hello World"
let newString = ""

// Complexidade O(n) porém funciona :)
for(let i= original.length-1; i>=0 ; i--){
    newString += original[i]
}

console.log(newString)