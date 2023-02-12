//I need a funtion that tests if it's a palindrome
// BOB Postive Pablo Negative
//  if palindrome True IF NOT False

function palindrome (name){
    //  let palindrome = name.split("").reverse().join("")
    
    //  return name == palindrome
    return name == name.split('').reverse().join("")
    
        // if(name == palindrome){
        //     return true
        // }else{
        //     return false
        // }
    
    }
    
    
    console.log(palindrome("hola"))
    // console.log(palindrome("Pablo"))