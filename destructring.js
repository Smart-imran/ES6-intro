const actor = {
    name:"Imran",
    age:22,
    color: "White",
    phone:"01245545",
    money:11326541
}

//if right side is an object left side will destructuring an object

const {phone,age,name,money} = actor



/* const phone = actor.phone;
console.log(phone); */
/* console.log(phone);
console.log(age);
console.log(name);
console.log(money); */

// array destructuring

    /* const numbers = [44,46];
    const [first,second] = numbers;
    const [a,b] = [2,3];
 */
    //advanced 
    function doubleThem(a,b){
        return [a*2, b*2];
    }

    const [first,second] = doubleThem(6,5);

    console.log(first,second);