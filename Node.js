const Node = (value) => {
  return {
    value: null,
    nextNode: value || null,
  };
};

export default Node;
