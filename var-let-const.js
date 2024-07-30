// var : no reason to var anymore
// let : allow it to reassign
// const : don't allow to reassign

const numbers = [23, 4, 23, 12, 56];
numbers[1] = 55;
numbers.push(8,44,52); 
//console.log(numbers);

// object 

let students = {
    name: "Imran",
    age:28,
    address:"Rajshahi"
}
students = {name:'Sweet'}
    //console.log(students);
    let sum = 0;
    for (let i = 0; i < 10; i++) 
    {
        sum=sum+i;
    }
    console.log(sum);

