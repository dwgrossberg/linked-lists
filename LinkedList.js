import Node from "../linked-lists/Node";

const LinkedList = () => {
  let HEAD = null;
  let length = 0;

  const append = (value) => {
    const newNode = Node(value);
    length += 1;
    if (HEAD === null) {
      return (HEAD = newNode);
    }
    let pointer = HEAD;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    pointer.nextNode = newNode;
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

  return {
    append,
    head,
    tail,
  };
};

export default LinkedList;
