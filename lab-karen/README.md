## Lab 10 - Stacks and Queues

This project creates stacks and queues for data storage.

### Installation
This project requires Node JS.
Run *npm init* to set up program dependancies.
Use *npm i -D jest eslist* to install developer dependancies for testing and linter.


## Accessing each method

_The stack constructor in stack,js and 3 methods - push, pop and peek._
let Stack = require('./lib/stack');

let testStack = new Stack;

testStack.push(1);

testStack.pop();

testStack.push(2);
testStack.push(3);
testStack.peek();

_The queue constructor in queue,js and 2 methods - enqueue and dequeue._
let Queue = require('./lib/queue');

let testQueue = new Queue;

testQueue.enqueue(4);
testQueue.enqueue(5);
console.log(testQueue);

testQueue.dequeue();
console.log(testQueue);

### Running tests
From the command line, type *npm run test* to start testing.



### Big-O notation
The big O notation for each of these methods is O(1) since there is no interation.
