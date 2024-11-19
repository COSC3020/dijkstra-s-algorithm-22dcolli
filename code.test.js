const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

//The classGraph test portion was directley from Ishita's repository, she was using it to show me a baseline I could work from and the syntax that she used. The other tests are ones I set up by myself.
let classGraph = [
  [0, 2, 1, 4, 0, 0, 0, 0],
  [0, 0, 1, 0, 10, 2, 0, 0],
  [9, 0, 0, 0, 8, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 0, 0],
  [0, 0, 0, 7, 0, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 3],
  [0, 0, 0, 0, 4, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0]
];
assert(JSON.stringify(dijkstra(classGraph, 2)) == JSON.stringify([9,11,0,13,8,11,9,14]));
assert(JSON.stringify(dijkstra(classGraph, 4)) == JSON.stringify([18,20,9,7,0,3,1,6]));
//end of example section

/*
let loopTest = [
  [0, 1, 0, 0],
  [0, 0, 2, 3],
  [0, 0, 0, 0],
  [1, 0, 0, 0]
];


assert(JSON.stringify(dijkstra(loopTest,0)) == JSON.stringify([0,1,3,4]));
assert(JSON.stringify(dijkstra(loopTest,3)) == JSON.stringify([1,Infinity,Infinity,4]));
*/
