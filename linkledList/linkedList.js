class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = { value: value, next: null };

    if (this.tail) this.tail.next = newNode;
    this.tail = newNode;
    if (!this.head) this.head = newNode;
  }

  prepend(value) {
    const newNode = { value: value, next: this.head };

    this.head = newNode;
    if (!this.tail) this.tail = newNode;
  }

  toArray() {
    const elements = [];

    let curNode = this.head;
    while (curNode) {
      elements.push(curNode);
      curNode = curNode.next;
    }

    return elements;
  }
}

const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.prepend(3);

console.log(linkedList.toArray());
