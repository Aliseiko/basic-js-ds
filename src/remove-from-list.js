const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  class ListNode {
    constructor(x) {
      this.value = x;
      this.next = null;
    }
  }

  const arr = [],
  newArr = [];

  function arrFromList(list) {
    arr.push(list.value);
    if (list.next) arrFromList(list.next)
  }

  function listFromArr(array) {
    let i = 0;
    return function abc() {
      let list = new ListNode(array[i]);
      if (array[i + 1] !== undefined) {
        i++;
        list.next = abc(array[i]);
      }
      //console.log(list)
      return list;
    }()
  }

  arrFromList(l);
  arr.forEach(el => {
    if (el !== k) newArr.push(el);
  })
  return listFromArr(newArr)
}

module.exports = {
  removeKFromList
};
