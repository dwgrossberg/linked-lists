import Node from "../linked-lists/Node";

const LinkedList = () => {
  let HEAD = null;
  let length = 0;

  const append = (value) => {
    const node = Node(value);
    length += 1;
    if (HEAD === null) {
      return (HEAD = node);
    }
  };

  const head = () => {
    return HEAD.value;
  };

  return {
    append,
    head,
  };
};

export default LinkedList;
