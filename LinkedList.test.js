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
});
