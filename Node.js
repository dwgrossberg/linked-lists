const Node = (input) => {
  return {
    value: input || null,
    nextNode: null,
    changeValue(newValue) {
      this.value = newValue;
    },
  };
};

export default Node;
