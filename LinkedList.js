import Node from "../linked-lists/Node";

const LinkedList = () => {
  let HEAD = null;
  let length = 0;

  const append = (value) => {
    const newNode = Node(value);
    length++;
    if (HEAD === null) {
      return (HEAD = newNode);
    }
    let pointer = HEAD;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    pointer.nextNode = newNode;
  };

  const prepend = (value) => {
    const newNode = Node(value);
    length++;
    if (HEAD === null) {
      return (HEAD = newNode);
    }
    newNode.nextNode = HEAD;
    HEAD = newNode;
  };

  const size = () => {
    return length;
  };

  const head = () => {
    return HEAD.value;
  };

  const tail = () => {
    let pointer = HEAD;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    return pointer.value;
  };

  const at = (index) => {
    let pointer = HEAD;
    for (let i = 0; i < index; i++) {
      pointer = pointer.nextNode;
    }
    return pointer;
  };

  const pop = () => {
    at(size() - 2).nextNode = null;
    length--;
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
  };
};

export default LinkedList;
