const glass = {
    name: "Glass",
    color: "Red",
    price: 12,
    isCleaned: true
};

const keys = Object.keys(glass);
console.log(keys);// output: [ 'name', 'color', 'price', 'isCleaned' ]
const valuess = Object.values(glass);
//console.log(valuess);// output: [ 'Glass', 'Red', 12, true ] 

//array  of array two dimensional array
const pair = Object.entries(glass);
console.log(pair); 
/* output:[ 
    [ 'name', 'Glass' ],
    [ 'color', 'Red' ],
    [ 'price', 12 ],
    [ 'isCleaned', true ]
 ] */

    //delete

    //delete glass.isCleaned;

    const {isCleaned, name, ...shortenGlass} = glass
    console.log(shortenGlass);

    // object freeze 
    //Object.freeze(glass);
    glass.source = "Imran";
    console.log(glass);