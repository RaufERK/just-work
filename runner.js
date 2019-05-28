console.log('RUN!!!!');
let myStr = '1234567890'
let numbers = myStr.split('')

console.log(numbers);

let myNewArr=[]
for (let i=0;i<3;i++){
    
    let newArr = numbers.splice(0,3)

    myNewArr.push(newArr)

}


console.log(myNewArr);
