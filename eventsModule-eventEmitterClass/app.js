const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2)=>{
  console.log('tutorial event has occurred');
  console.log(num1 + num2);
});

eventEmitter.emit('tutorial', 1, 2);

//-----------------------------------------------//
//now using classes

class Person extends EventEmitter{
  constructor(name){
    super(); // allows us to use this.
    this._name = name;
  }

  get name(){
    return this._name;
  }
}

let pedro = new Person('Pedro');
let christina = new Person('Christina');

christina.on('name', ()=>{
  console.log('my name is ' + christina.name);
})

pedro.on('name', ()=>{
  console.log('my name is ' + pedro.name);
});

pedro.emit('name');
christina.emit('name');
