// Problem
// If you can't sleep, just count sheep!!
// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: 
// "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
var countSheep = function (num){
    let arr = []
    let heh = []
     if(num==0){  
        heh.push(``)
        num = 1 
    }else if(num>0){
        for(let i=1;i<=num;i++){
            arr.push(`${i} sheep...`)
            let result = arr.toString()
           result = result.replace(/,/g, '')
           heh.push(result)
    }
    }
    return heh[num-1]

}
countSheep(30)

// A cooler solution would be
var countSheep = function (num){
    let str = "";
    for(let i = 1; i <= num; i++) { str+= `${i} sheep...`; }
    return str;
  }