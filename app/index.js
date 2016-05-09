var sub = require('./sub');
console.log('sub',sub());
let {name,age,address} = sub();
console.log('name',name);
let checkAB = (a=1,b=2) => {
  console.log(`a ${a}`,`b ${b}`);
}
const arr = [1,2,3];
const obj = {nameb:'nameb',sex:'0',}
let [x,y,...other] = arr;
let {nameb,sex='sex'} = obj;
console.log(nameb);
console.log(x);
console.log(other);
console.log(sex);

checkAB(3,7);
checkAB();
