'use strict';

const Node = require('./node'); //require in node.js functionality

module.exports = class { //anonomous class
  constructor(maxSize=1048) { //set a stack constuctor and pass an argument - with a value in this case - of maximum number of items in stack
    this.top = null; //set to null because no items have been added
    this.maxSize = maxSize; //set maxSize of stack
    this.size = 0; //initialize counter for stack size
  }
  push(val) { //add an item to the top of the stack
    if(this.size === this.maxSize) throw new Error('Stack overflow!'); //if stack is full throw an error

    let node = new Node(val);  //create a new node

    node.next = this.top; //set pointer to new node as the top
    this.top = node; //add new node
    this.size++; //increment stack size
    return this.top; //return new top
  }

  pop() { //remove an item from the top of the stack
    let temp = this.top; //set up a temporary pointer
    this.top = temp.next; //set the top pointer to the next item in stack
    temp.next = null; //remove item from stack by unlinking .next
    this.size--; //decrement size

    return temp; //return the old top node
  }

  peek() { //look at the top of the stack
    return this.top;
  }
};
