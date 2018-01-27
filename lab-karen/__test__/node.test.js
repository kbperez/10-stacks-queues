'use strict';

const Node = require('../lib/node'); //require node.js functionality
require('jest');

describe('Node Data Structure Module', function () {
  beforeEach(() => new Node(1)); //create new instance of node

  describe('default properties', () => { //test node construcor

    it('should create a new instance of a node', () => {
      expect(this.node).toBeInstanceOf(Node);
    });

    it('should have a defaul val of null assign to the top key', () => {
      expect(this.node.next).toBeNull();
    });

    it('should throw an error when no val is passed in', () =>  {
      expect().toThrow();
    });
  });
});
