'use strict';
//constructor for nodes
module.exports = class {
  constructor(val) {
    if(!val) return Error('Value must passes as an argument');
    this.val = val;
    this.next = null;
  }
};
