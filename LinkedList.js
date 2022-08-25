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
    if (!HEAD) return null;
    return length;
  };

  const head = () => {
    if (!HEAD) return null;
    return HEAD.value;
  };

  const tail = () => {
    if (!HEAD) return null;
    let pointer = HEAD;
    while (pointer.nextNode !== null) {
      pointer = pointer.nextNode;
    }
    return pointer.value;
  };

  const at = (index) => {
    if (!HEAD) return null;
    let pointer = HEAD;
    for (let i = 0; i < index; i++) {
      pointer = pointer.nextNode;
    }
    return pointer;
  };

  const pop = () => {
    if (!HEAD) return null;
    // for a List with one node
    if (HEAD.nextNode === null) {
      HEAD = null;
    }
    // find the pointer before the tail
    at(size() - 2).nextNode = null;
    length--;
  };

  const contains = (value) => {
    if (!HEAD) return null;
    let pointer = HEAD;
    while (pointer.nextNode !== null) {
      if (pointer.value === value) return true;
      pointer = pointer.nextNode;
    }
    // check the tail node as well
    return pointer.value === value ? true : false;
  };

  const find = (value) => {
    if (!HEAD) return null;
    let index = 0;
    let pointer = HEAD;
    while (pointer.nextNode !== null) {
      if (pointer.value === value) return index;
      pointer = pointer.nextNode;
      index++;
    }
    // check the tail node as well
    return pointer.value === value ? index : null;
  };

  const toString = () => {
    if (!HEAD) return null;
    let pointer = HEAD;
    let result = "";
    while (pointer.nextNode !== null) {
      result = result.concat(`( ${pointer.value} ) --> `);
      pointer = pointer.nextNode;
    }
    // for the tail
    result = result.concat(`( ${pointer.value} ) --> null`);
    console.log(result);
    return result;
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
  };
};

export default LinkedList;
