# Data Structures: LinkedList

This code is a 'solution' to [The Odin Project's](https://www.theodinproject.com) [Linked Lists Project](https://www.theodinproject.com/lessons/javascript-linked-lists), part of their Computer Science course.

All factory functions were implemented using TDD (Jest).

### LinkedList methods:

- `append(value)` adds a new node containing value to the end of the list
- `prepend(value)` adds a new node containing value to the start of the list
- `size()` returns the total number of nodes in the list
- `head()` returns the first node in the list
- `tail()` returns the last node in the list
- `at(index)` returns the node at the given index
- `pop()` removes the last element from the list
- `contains(value)` returns true if the passed in value is in the list and otherwise returns false
- `find(value)` returns the index of the node containing value, or null if not found
- `toString()` returns your LinkedList objects as strings in the format: ( value ) -> ( value ) -> ( value ) -> null
- `insertAt(value, index)` inserts a new node with the provided value at the given index
- `removeAt(index)` removes the node at the given index
