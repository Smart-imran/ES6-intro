// for of use array and string 
// for in use in object

const numbers = [12,54,63,17,21];

for (const num of numbers) {
    
}

const strings = "Hello Bangladesh";

for(const str of strings){
    //console.log(str);
}

const glass = {
    name: "Glass",
    color: "Red",
    price: 12,
    isCleaned: true
};
    for(const key in glass){
        const val = glass[key];
        console.log(key,val);
    }