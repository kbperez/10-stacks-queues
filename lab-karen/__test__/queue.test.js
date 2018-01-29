'use strict';

const Queue = require('../lib/queue'); //require queue.js functionality
require('jest');

describe('Queue Data Structure Module', function () {
  beforeEach(() => this.queue = new Queue()); //create new instance of queue

  describe('default properties', () => { //test queue construcor

    it('should create a new instance of a queue', () => {
      expect(this.queue).toBeInstanceOf(Queue);
    });

    it('should have a defaul val of null assign to the top key', () => {
      expect(this.queue.front).toBeNull();
    });

    it('should have a default val of 0 assigned to the size key', () => {
      expect(this.queue.size).toBe(0);
    });
  });

  describe('#enqueue', () => { //test enque functionality
    it('should have a size of 20', () => {
      [...Array(20)].map((e, i) => this.queue.enqueue(~~(Math.random() * i)));
      expect(this.queue.size).toEqual(20);
    });

    it('should add a new node with the val of 1 to the top of the queue', () => {
      this.queue.enqueue(1); //add value to queue
      expect(this.queue.back.val).toEqual(1);
    });
  });

  describe('#dequeue', () => { //test dequeue functionality
    it('should return an Error if the queue is empty', () => {
      expect(this.queue.size).toThrow();
    })

    it('should remove the front node from the queue', () => {
      this.queue.dequeue(1); //add value to queue
      expect(this.queue.front.val).toEqual(1);
      expect(this.queue.dequeue().val).toEqual(1);
    });
  });
});
