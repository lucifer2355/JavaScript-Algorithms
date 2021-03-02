const reverseLinkedList = head => {
  let prev = null;
  let curr = head;
  let next = curr.next;

  while (curr != null) {
    nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }

  return prev;
};

console.log(reverseLinkedList());
