const sum = (num1,num2) => num1 + num2;

const PI = 3.14;

class SomeMathObject{
  constructor(){
    console.log('object created');
  }
}

//example with only one export
//module.exports = sum;

// one version of syntax to export multiple
//module.exports.sum = sum;
//module.exports.PI = PI;
//module.exports.SomeMathObject = SomeMathObject;

// another version of syntax to export multiple. Same effect as above
module.exports = {sum : sum, PI : PI, SomeMathObject : SomeMathObject};
