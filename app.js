

// findFavoriteFood = function( name ){

//     if(name == "Oduor"){
//         console.log("Your favorite food is fish")
//     }
    
//     else if(name == "Melisa"){
//         console.log("Your favourite food is pizza")
//     }
    
//     else{
//         console.log("Sorry! I seem not to remember your favorite food")
//     }
    
    
// }


// findFavoriteFood("John")



// function add(a,b){
//     return a + b
// }

// result = add(20,3)

// console.log(result)


function calculator(a, b, operator){
    if(operator == "+"){
        return a + b
    }else if(operator == "-"){
        return a - b
    }else if(operator == "*"){
        return a * b
    }else if(operator == "/"){
        return a / b
    }else{
        return "Invalid operator"
    }
}

result = calculator(6,3, "=")
console.log(result)