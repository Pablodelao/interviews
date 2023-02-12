const inventors = [
    { id: 146, name: "Albert", lastName: "Einstein", year: 1879, passed: 1955 },
    { id: 345, name: "Isaac", lastName: "Newton", year: 1643, passed: 1727 },
    { id: 244, name: "Galileo", lastName: "Galilei", year: 1564, passed: 1642 },
    { id: 343, name: "Marie", lastName: "Curie", year: 1867, passed: 1934 },
    { id: 442, name: "Johannes", lastName: "Kepler", year: 1571, passed: 1630 },
    { id: 841, name: "Nicolaus", lastName: "Copernic", year: 1473, passed: 1543 },
    { id: 542, name: "Max", lastName: "Planck", year: 1858, passed: 1947 },
    { id: 643, name: "Katherine", lastName: "Blodget", year: 1898, passed: 1979 },
    { id: 944, name: "Ada", lastName: "Lovelace", year: 1815, passed: 1852 },
    { id: 145, name: "Sarah E.", lastName: "Goode", year: 1855, passed: 1905 },
    { id: 856, name: "Lise", lastName: "Meitner", year: 1878, passed: 1968 },
    { id: 547, name: "Hanna", lastName: "Hammarström", year: 1829, passed: 1909 }
  ];
  
  // 1) Filter the list of inventors for those who were born in the 1500's

  const filtt = inventors.filter(inv => inv.year >= 1500 && inv.year < 1600)
  console.log(filtt)

// console.log(born1500s)

  // 2) Give us an array of the inventor name and last names
  const namess = inventors.map(inv => `${inv.name} ${inv.lastName}`)

console.log(namess)
 
  
  // 3) Sort the inventors by birthdate, oldest to youngest
  const ordered = inventors.sort((a,b) => a.year > b.year ? 1:-1)
  console.log(ordered)
 
 

  // sort the inventors name aplabetical order and then the other way. 
  
  
  // 4) How many years did all the inventors live?
  const reducedd = inventors.reduce((total,b)=> {
    return total + (b.passed - b.year)
  },0 )

// const simplesum = inventors.reduce((total,b) =>{
//      return total + ( b.passed - b.year)
//     },0 )

// console.log(simplesum, "lol")
  
//   console.log(reducedd , 33)
  // 5)  is at least one person 19 ? true or false
const oneperson = inventors.map(inv => inv.passed - inv.year )
console.log(oneperson)
const is19 = oneperson.some(inv => inv == 19)
  console.log(is19)
  // 6) all are over 19 ? true or false
  const over19 = oneperson.every(inv => inv > 19)
 console.log(over19)
  
  // 7) Find inventor with id: 856
  const finddd = inventors.find(inv => inv.id == 856)
  console.log(finddd)
//  
  // 8. Reduce Exercise: sum up the instances of each of these into a single object
  // Example:
  // var pets = ['dog', 'cat', 'dog'];
  // Result: { 'dog': 2, 'cat': 1 }
  
  const data = [
    "car",
    "car",
    "truck",
    "truck",
    "bike",
    "walk",
    "car",
    "van",
    "bike",
    "walk",
    "car",
    "van",
    "car",
    "truck",
    "pogostick"
  ];
  //put numbers greater than 3 in an array and the ones less than 3 in another array
  const loll = [1,2,3,4,5,3,4,10,2]
  const newless = []
  const newwwmore =[]
const lel = loll.forEach(function (x){
    if(x > 3){
        newwwmore.push(x)
    }else{
        newless.push(x)
    }
})
console.log(newwwmore)
console.log(newless)

// console.log(summ)

console.log('wtf')

const map = data.reduce((total, b) => {
    total[b] = (total[b] || 0 ) +1
    return total
})


console.log(map)

//   const counts = {};
// data.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
// console.log(counts,"ll")

let idkkkkman = 'kfkfkfkfk'

if( idkkkkman.endsWith("k")){
  console.log(idkkkkman.slice(0,-1))
}else{
console.log(idkkkkman)
}