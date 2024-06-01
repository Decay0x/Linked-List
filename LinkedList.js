import Node from './Node.js';

export default function LinkedList() {
  let head = null;
  let size = 0;

  const list = {
    // adds a new node containing value to the end of the list
    append: (value) => {
      const newNode = Node(value);
      if (!head) {
        head = newNode;
      } else {
        let pointer = head;
        while (pointer.nextNode) {
          pointer = pointer.nextNode;
        }
        pointer.nextNode = newNode;
      }
      size++;
    },
    // adds a new node containing value to the start of the list
    prepend: (value) => {
      const newNode = Node(value, head);
      head = newNode;
      size++;
    },

    // returns the total number of nodes in the list
    size: () => {
      return size;
    },
    // returns the first node in the list
    head: () => {
      return head;
    },
    // returns the last node in the list
    tail: () => {
      let pointer = head;
      while (pointer && pointer.nextNode) {
        pointer = pointer.nextNode;
      }
      return pointer || null;
    },
    // returns the node at the given index
    at: (index) => {
      let pointer = head;
      let counter = 0;
      while (pointer.nextNode !== null) {
        if (counter === index) {
          return pointer;
        } else {
          counter++;
          pointer = pointer.nextNode;
        }
      }
      return pointer.index === index ? pointer : -1;
    },
    // removes the last element from the list
    pop: () => {
      if (!head) return null;
      let previous = null;
      let pointer = head;
      while (pointer.nextNode) {
        previous = pointer;
        pointer = pointer.nextNode;
      }
      if (previous) {
        previous.nextNode = null;
      } else {
        head = null;
      }
      size--;
      return pointer;
    },
    // returns true if the passed in value is in the list and otherwise returns false.
    contains: (value) => {
      let pointer = head;
      let result = false;
      while (pointer.nextNode !== null) {
        pointer = pointer.nextNode;
        if (pointer.value === value) {
          result = true;
          break;
        }
      }
      return result;
    },
    //returns the index of the node containing value, or null if not found.
    find: (value) => {
      let pointer = head;
      let counter = 0;
      let foundAt = null;
      while (pointer) {
        if (pointer.value === value) {
          foundAt = counter;
          break;
        }
        pointer = pointer.nextNode;
        counter++;
      }
      return foundAt;
    },
    // that inserts a new node with the provided value at the given index
    insertAt: (value, index) => {
      if (index < 0) throw new Error('Index cannot be negative');
      if (index > size) throw new Error('Index out of bounds');

      let pointer = head;
      let previous = null;
      let counter = 0;
      while (counter < index && pointer) {
        previous = pointer;
        pointer = pointer.nextNode;
        counter++;
      }

      if (pointer) {
        const newNode = Node(value, pointer);
        previous.nextNode = newNode;
      } else {
        throw new Error('Index out of bounds');
      }
      size++;
    },
    // that removes the node at the given index.
    removeAt: (index) => {
      if (index < 0) throw new Error('Index cannot be negative');
      if (index === 0) {
        head = head.nextNode;
      } else {
        let pointer = head;
        let previous = null;
        let counter = 0;
        while (counter < index && pointer) {
          previous = pointer;
          pointer = pointer.nextNode;
          counter++;
        }
        if (pointer) {
          previous.nextNode = pointer.nextNode;
        } else {
          throw new Error('Index out of bounds');
        }
      }
      size--;
    },
    // represents your LinkedList objects as strings, so you can print them out and preview them in the console.
    toString: () => {
      let pointer = head;
      let result = [];
      while (pointer) {
        result.push(pointer.value);
        pointer = pointer.nextNode;
      }
      return result.join(', '); // Simplified join operation for readability
    },
  };
  return list;
}

const list = LinkedList();

list.append(5);
list.append(6);
list.append(7);
list.prepend(10);
list.prepend(9);
list.prepend(8);
list.insertAt(3, 1);
list.pop();
list.removeAt(4);

console.log(list.size());
console.log(list.head());
console.log(list.at(25));
console.log(list.contains(19));
console.log(list.find(5));
console.log(list.tail());
console.log(list.toString());
