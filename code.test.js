const fs = require('fs');
const assert = require('assert');

eval(fs.readFileSync('code.js')+'');

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
