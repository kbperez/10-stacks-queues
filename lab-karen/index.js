'use strict';

let Stack = require('./lib/stack');

let testStack = new Stack;

testStack.push(1);
console.log(testStack);

testStack.pop();
console.log(testStack);

testStack.push(2);
testStack.push(3);
testStack.peek();
console.log(testStack)

let Queue = require('./lib/queue');

let testQueue = new Queue;

testQueue.enqueue(4);
testQueue.enqueue(5);
console.log(testQueue);

testQueue.dequeue();
console.log(testQueue);
