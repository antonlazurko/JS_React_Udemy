'use strict';
function recus(n, st) {
  if (st === 1) {
    console.log('END');
    return n;
  }
  return n * recus(n, st - 1);
}

console.log(recus(9, 2));

var c = 'some';
var d = 'same';

console.log('1' + 1);

const res = [1, 2, 3];
console.log(1 + '1');
