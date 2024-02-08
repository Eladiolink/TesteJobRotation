// Número para o teste
const num = 89

function isFibonacci(num){
    
   let fibonacci = [0,1]
   
   let newNumber = fibonacci[fibonacci.length -2 ] + fibonacci[fibonacci.length-1]
    
   while(newNumber <= num){
    newNumber = fibonacci[fibonacci.length -1 ] + fibonacci[fibonacci.length-2]

    if(newNumber == num){
        console.log(`O número ${num} pertence a sequência`)     
        return
    }
    fibonacci.push(newNumber)
   }
   console.log(`O número ${num} não pertence a sequência`) 
}

isFibonacci(num)