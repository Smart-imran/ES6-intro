const difference = (x ,y) => x - y;
//console.log(difference(10,5));


// single parameter
const getAge = (person) => person.age;

const students = {name:"Rahim", age:28};

let results = getAge(students);
//console.log(results);

//no parameter
 const getPi  = () => Math.PI;
 //console.log(getPi());


 // large arrow function
  const doMath = (x,y,z) => {

    const add = x+y+z;
    const multi = x*y*z;
    const sum1 = add + multi;
    return sum1;
  }

  let addNum = doMath(4,5,6);
  console.log(addNum);


  (()=>{
    const htmlstr = `<p class ="subTitle" >Free us shipping</p>`;
    document.querySelector(".ProductMeta_Title.Heading").insertAdjacentHtml('afterend',htmlstr)
  })();