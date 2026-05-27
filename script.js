class Node {
  constructor(value = null, nextNode = null) {
    this.value = value;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  // head is null when list is empty
  head = null;

  // adds a new node containing value to the end of the list
  append(value, nextNode) {
    // adds a new node to head if list is empty
    if (this.head == null) {
      this.head = new Node(value);
      return this.head;
    }

    if (this.head !== null) {
      // dummy variable for moving to the next node
      let copy;
      if (!nextNode) {
        copy = this.head;
      } else {
        copy = nextNode;
      }
      // recursion traverses through nodes in sequential order starting from head until null is reached
      if (copy.nextNode !== null) {
        nextNode = copy.nextNode;
        return this.append(value, nextNode);
      }
      // creates a new node when null is reached
      if (copy.nextNode == null) {
        return (copy.nextNode = new Node(value));
      }
    }
  }

  prepend() {
    // adds a new node containing value to the start of the list
  }

  size() {
    // returns the total nodes in the list
  }

  firstNode() {
    // this returns the value of the first node
  }

  at() {
    // this returns value of the node at given index
  }

  pop() {
    // this removes the head node
  }

  contains() {
    // returns true if the passed value is in the list and otherwise false
  }

  findIndex() {
    // returns the index of the node containing the given value. If an index can't be found, return -1. If more than one node has a matching value, it should return the index of the first node with the matching value.
  }

  // represents objects as strings. the format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString(string = "", nextNode) {
    if (this.head == null) {
      string += "null";
      console.log(string);
      return;
    }

    let copy;
    if (!nextNode) {
      copy = this.head;
    } else {
      copy = nextNode;
    }

    if (copy.value !== null) {
      string += `( ${copy.value} ) -> `;
    }
    if (copy.nextNode == null) {
      string += "null";
    } else {
      nextNode = copy.nextNode;
      return this.toString(string, nextNode);
    }
    console.log(string);
    return string;
  }
}

let list = new LinkedList();
list.toString();
list.append("dog");
console.log(list.append("cat"));
console.log(list.append(4));
console.log(list.append(6));
list.toString();
