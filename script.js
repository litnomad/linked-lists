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
      let current;
      if (!nextNode) {
        current = this.head;
      } else {
        current = nextNode;
      }
      // recursion traverses through nodes in sequential order starting from head until null is reached
      if (current.nextNode !== null) {
        nextNode = current.nextNode;
        return this.append(value, nextNode);
      }
      // creates a new node when null is reached
      if (current.nextNode == null) {
        return (current.nextNode = new Node(value));
      }
    }
  }

  // adds a new node containing value to the start of the list
  prepend(value) {
    const append = this.head;
    this.head = new Node(value);
    this.head.nextNode = append;
    console.log("prepend", this.head);
    return this.head;
  }

  // returns the total nodes in the list
  size() {
    let current = this.head;
    let counter = 0;

    while (current !== null) {
      counter++;
      current = current.nextNode;
    }

    return counter;
  }

  // returns the value of the first node
  firstNode() {
    return this.head;
  }

  // returns value of the node at given index
  at(index) {
    let current = this.head;
    let i = 0;

    while (i <= index && current !== null) {
      if (i == index) {
        break;
      }
      current = current.nextNode;
      i++;
    }

    return current !== null ? current.value : null;
  }

  // removes the head node and return its value; undefined if empty
  pop() {
    if (this.head == null) {
      return undefined;
    }

    const pop = this.head;
    this.head = this.head.nextNode;
    return pop;
  }

  // returns true if the passed value is in the list and otherwise false
  contains(value) {
    let current = this.head;

    while (current !== null) {
      if (current.value == value) {
        return true;
      }

      current = current.nextNode;
    }
    if (current == null) {
      return false;
    }
  }

  // returns the index of the node containing the given value. If an index can't be found, return -1. If more than one node has a matching value, returns the index of the first node with the matching value.
  findIndex(value) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.value == value) {
        return index;
      }
      current = current.nextNode;
      index++;
    }
    if (current == null) {
      return -1;
    }
  }

  // represents objects as strings; format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString(string = "", nextNode) {
    if (this.head == null) {
      string += "null";
      return string;
    }

    let current;
    if (!nextNode) {
      current = this.head;
    } else {
      current = nextNode;
    }

    if (current.value !== null) {
      string += `( ${current.value} ) -> `;
    }
    if (current.nextNode == null) {
      string += "null";
    } else {
      nextNode = current.nextNode;
      return this.toString(string, nextNode);
    }

    return string;
  }
}

let list = new LinkedList();
console.log(list.append("dog"));
console.log(list.append("cat"));
console.log(list.append("igloo"));
console.log(list.append("igloo"));
console.log(list.size());
console.log(list.firstNode());
console.log(list.at(2));
console.log(list.at(4));
console.log(list.pop());
console.log(list.toString());
console.log(list.contains("igloo"));
console.log(list.contains("dog"));
console.log(list.findIndex("igloo"));