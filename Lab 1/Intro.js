var mathlib = require('./mymath')


function init(){

    console.log('hello World');

    let age = 90;
    console.log(age);
    
    let name = "Walter Prescot";
    console.log("my name is: " + name);
    

  mathlib.sayHello("a paramater val ");
  var res = mathlib.sum(21,21);
  console.log(res);
}

init();