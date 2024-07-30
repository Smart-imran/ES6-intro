const max = Math.max(6, 23, 45, 1, 89, 23)
const numbers = [12,24,58,46,154,2,45,95];

const arrayMax = Math.min(...numbers);
console.log(arrayMax);

//use spread operator to copy
const friends = [12,32,45,15];
const bondu = [...friends];
bondu.push(25);
console.log(bondu);
console.log(friends);

//advanced 

const sonkha = [...friends,50]; // add extra elements while copy
console.log(sonkha);


