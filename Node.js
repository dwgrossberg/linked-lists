const Node = (value) => {
  return {
    value: value || null,
    nextNode: null,
    changeValue(newValue) {
      this.value = newValue;
    },
  };
};

export default Node;
