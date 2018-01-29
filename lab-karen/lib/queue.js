'use strict';

const Node = require('./node'); //require in node.js functionality

module.exports = class { //anonomous class
  constructor() { //set a queue constuctor and pass an argument - with a value in this case - of maximum number of items in queue
    this.front = null; //set to null because no items have been added
    this.back = null, //set to null because no items
    this.size = 0; //initialize counter for queue size
  }


  enqueue(val) { //add an item to the back  of the queue

    let node = new Node(val);  //create a new node

    this.back ? this.back.next = node : this.front = node;
    this.back = node;
    this.size++;

    return this.front; //return new front
  }

  dequeue() {   //remove an item from the front of the queue
    if(this.size === 0) throw new Error ('The queue is empty');

    let temp = this.front; //set up a temporary pointer
    this.front = this.front.next; //set the front pointer to the next item in queue
    temp.next = null; //remove item from queue by unlinking .next
    this.size-- ;//decrease size of queue

    return temp; //return the old front node
  }
};
