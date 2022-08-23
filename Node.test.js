/* eslint-disable no-undef */
import Node from "../linked-lists/Node";

const nullNode = Node();
const valueNode = Node("value");

describe("Node properties", () => {
  test("happy path", () => {
    expect(Node);
  });
  test("Node returns an object with value and nextNode properties set to null by default", () => {
    expect(nullNode.value).toBe(null);
    expect(nullNode.nextNode).toBe(null);
  });
  test("Node returns an object with custom value if specified", () => {
    expect(valueNode.value).toBe("value");
    expect(nullNode.nextNode).toBe(null);
  });
  test("changeValue(value) will update the value of Node", () => {
    nullNode.changeValue("newValue");
    expect(nullNode.value).toBe("newValue");
  });
});
