/* eslint-disable no-undef */
import LinkedList from "../linked-lists/LinkedList";
import Node from "../linked-lists/Node";

const list = LinkedList();
describe("LinkedList methods", () => {
  test("happy path", () => {
    expect(LinkedList);
  });
  test("append(value) adds a new node containing value to the end of the list", () => {
    list.append("node1");
    list.append("node2");
    expect(list.head()).toBe("node1");
    expect(list.tail()).toBe("node2");
  });
  test("prepend(value) adds a new node containing value to the start of the list", () => {
    list.prepend("preNode");
    expect(list.head()).toBe("preNode");
    expect(list.tail()).toBe("node2");
  });
  test("size() returns the total number of nodes in the list", () => {
    expect(list.size()).toBe(3);
  });
  test("at(index) returns the node at the given index", () => {
    expect(list.at(1).value).toBe("node1");
  });
  test("pop() removes the last element from the list", () => {
    list.pop();
    expect(list.size()).toBe(2);
    expect(list.tail()).toBe("node1");
  });
});
