'use strict';

let Stack = require('./lib/stack');

let testStack = new Stack;

testStack.push(1);
console.log('push', testStack);

testStack.pop();
console.log('pop', testStack);

testStack.push(2);
testStack.push(3);
testStack.peek();
console.log('peek', testStack);

let Queue = require('./lib/queue');

let testQueue = new Queue;

// testQueue.dequeue();
// console.error(err);


testQueue.enqueue(4);
testQueue.enqueue(5);
console.log('enqueue', testQueue);

testQueue.dequeue();
console.log('dequeue', testQueue);
testQueue.dequeue();
console.log('dequeue', testQueue);
