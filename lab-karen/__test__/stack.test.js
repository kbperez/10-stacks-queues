'use strict';

const Stack = require('../lib/stack'); //require stack.js functionality
require('jest');

describe('Stack Data Structure Module', function () {
  beforeEach(() => this.stack = new Stack()); //create new instance of stack

  describe('default properties', () => { //test stack construcor

    it('should create a new instance of a stack', () => {
      expect(this.stack).toBeInstanceOf(Stack);
    });

    it('should have a defaul val of null assign to the top key', () => {
      expect(this.stack.top).toBeNull();
    });

    it('should have a default val of 0 assigned to the size key', () => {
      expect(this.stack.size).toBe(0);
    });

    it('should have a maxSize property with a default val of 1048', () => {
      expect(this.stack.maxSize).toEqual(1048);
    });
  });

  describe('#push', () => { //test push functionality
    it('should have a size of 20', () => {
      [...Array(20)].map((e, i) => this.stack.push(~~(Math.random() * i)));
    });

    it('should add a new node with the val of 1 to the top of the stack', () => {
      this.stack.push(1); //add value to stack
      expect(this.stack.top.val).toEqual(1);
    });

    it('should throw an error when maxSize is met', () =>  {
      expect(() => {
        [...Array(1049)].map((e, i) => this.stack.push(~~(Math.random() * i)));
      }).toThrow();
    });
  });

  describe('#pop', () => { //test pop functionality
    it('should remove the top node from the stack', () => {
      this.stack.push(1); //add value to stack
      expect(this.stack.top.val).toEqual(1);
      expect(this.stack.pop().val).toEqual(1);
    });
  });

  describe('#peek', () => { //this peek functionality
    it('should return the top of the stack', () => {
      expect(this.stack.top).toBeNull();
      this.stack.push(1);
      expect(this.stack.peek().val).toEqual(1);
    });
  });
});
