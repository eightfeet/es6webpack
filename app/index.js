var sub = require('./sub');
console.log('sub',sub());
let {name,age,address} = sub();
console.log('name',name);
let checkAB = (a=1,b=2) => {
  console.log(`a ${a}`,`b ${b}`);
}

checkAB(3,7);
checkAB();
