 
 // if value is not provide then default value 
 function add(num1,num2 = 0){
    const result = num1 + num2;

   
    console.log(num1,num2,result);
    return result;
 }

 const sum = add(10,);
 
 function fullName(firstName = "Mr", lastName = "x"){
    const name = firstName + " " + lastName;
    return name;
 } 

 const addName = fullName();

 console.log(addName) ;  