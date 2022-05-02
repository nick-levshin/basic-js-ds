const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  constructor() {
    this._root = null;
  }

  getUnderlyingList() {
    return this._root;
  }

  enqueue(value) {
    if (this._root) {
      let tail = this._root;
      while (tail.next) {
        tail = tail.next;
      }
      tail.next = new ListNode(value);
    } else {
      this._root = new ListNode(value);
    }
  }

  dequeue() {
    let node = this._root;
    this._root = this._root.next;
    return node.value;
  }
}

module.exports = {
  Queue,
};
