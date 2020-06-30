let one = document.getElementById("one")
let two = document.getElementById("two")
let three = document.getElementById("three")
let four = document.getElementById("four")
let five = document.getElementById("five")
let six = document.getElementById("six")
let seven = document.getElementById("seven")
let eight = document.getElementById("eight")
let nine = document.getElementById("nine")
let zero = document.getElementById("zero")
let add = document.getElementById("add")
let substract = document.getElementById("substract")
let multiply = document.getElementById("multiply")
let divide = document.getElementById("divide")
let dot = document.getElementById("dot")
let result = document.getElementById("result")
let num_1, num_2, operacion;
let clear = document.getElementById("clear")
let equal = document.getElementById("equal")

//lectura de botones
one.onclick = function(){
   Number( result.textContent = result.textContent + "1")
}
two.onclick = function(){
    Number( result.textContent = result.textContent + "2")
 }
three.onclick = function(){
    Number( result.textContent = result.textContent + "3")
 }
four.onclick = function(){
    Number(result.textContent = result.textContent + "4")
}
five.onclick = function(){
    Number(result.textContent = result.textContent + "5")
}
six.onclick = function(){
    Number(result.textContent = result.textContent + "6")
    console.log('numero 6')
}
seven.onclick = function(){
    Number(result.textContent = result.textContent + "7")
    console.log('numero 7')
}
eight.onclick = function(){
    Number(result.textContent = result.textContent + "8")
    console.log('numero 8')
}
nine.onclick = function(){
    Number(result.textContent = result.textContent + "9")
}
zero.onclick = function(){
    Number(result.textContent = result.textContent + "0")
}
dot.onclick = function(){
    Number(result.textContent = result.textContent + ".")
}
clear.onclick = function(){
    result.textContent = ''
}
add.onclick = function(){ //suma
    num_1 = result.textContent
    operacion='+'    
    clsScreen();
}
substract.onclick = function(){ //resta
    num_1 = result.textContent
    operacion='-'    
    clsScreen();
}
multiply.onclick = function(){ //multiplicacion 
    num_1 = result.textContent
    operacion='*'    
    clsScreen();
}
divide.onclick = function(){
    num_1 = result.textContent
    operacion='/'
    clsScreen()
}
equal.onclick = function(){
    num_2 = result.textContent;
    resolver();
    
}
function clsScreen(){
    result.textContent = ''
}
function resolver(){
    let res = 0
    if(operacion == '+'){
        res = parseFloat (num_1)+ parseFloat(num_2)  
    }
    else if(operacion == '-'){
        res = parseFloat (num_1) - parseFloat(num_2) 
    }
    else if(operacion == '*'){
        res = parseFloat (num_1) * parseFloat(num_2)
    }
    else if (operacion == '/'){
        res = parseFloat(num_1) / parseFloat(num_2)
    }
    result.textContent = res
}

/* add.onclick = function(){
    operacion = '+'
    num_1=result.textContent    
    console.log(num_1)
    result.textContent = '' 
} */
/* result.onclick = function(){
    result.textContent = result.textContent + "="
    console.log("ddddd")
} */


/* if(operacion == '+'){
    let resultado = 
    
}
 */





