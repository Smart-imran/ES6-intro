//iife function

/* (() => {
    // কোড
  })(); */


 /* 01.  (() => {
    console.log('This is an arrow function IIFE');
  })(); */

 /*  (function() {
    const message = 'Hello, World!';
    console.log(message);
  })();
   */
// fuction call 
  (function(name) {
    console.log(`Hello, ${name}!`);
  })('Imran');

  //উদাহরণ ৯: DOM ম্যানিপুলেশন
  (() => {
    const button = document.createElement('button');
    button.textContent = 'Click me';
    document.body.appendChild(button);
    
    button.addEventListener('click', () => {
      alert('Button clicked!');
    });
  })();
  





  ((num1,num2)=>{
    sum= num1 + num2;
    console.log(sum);
    
  })(2,5);

  //উদাহরণ ৫: রিটার্ন ভ্যালু
  const result = (function(a, b) {
    return a + b;
  })(5, 3);
  
  console.log(result); // 8

  //উদাহরণ ৬: লুপের ভিতরে IIFE
  for (var i = 0; i < 3; i++) {
    (function(index) {
      setTimeout(()=> {
        console.log(index);
      }, 1000);
    })(i);
  }
  
  
  
  
  