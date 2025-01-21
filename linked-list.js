import Node from "./node.js";

export default function LinkedList() {
  let headNode = null;

  const append = (value) => {
    if (head() === null) {
      prepend(value);
    } else {
      let tmp = head();
      while (tmp.nextNode !== null) tmp = tmp.nextNode;
      tmp.nextNode = Node(value);
    }
  };

  const prepend = (value) => {
    headNode = Node(value);
  };

  const size = () => {
    let tmp = headNode;
    let size = 0;
    while (tmp !== null) {
      size += 1;
      tmp = tmp.nextNode;
    }
    return size;
  };

  const head = () => {
    return headNode;
  };

  const tail = () => {
    let tmp = headNode;
    while (tmp.nextNode !== null) {
      tmp = tmp.nextNode;
    }
    return tmp;
  };

  const at = (index) => {
    let i = 1;
    let tmp = headNode;
    while (i < index) {
      tmp = tmp?.nextNode;
      i++;
    }
    return tmp;
  };

  const pop = () => {
    let current = headNode;
    let next = current.nextNode;

    if (next === null) {
      headNode = null;
      return current;
    }

    while (next.nextNode !== null) {
      current = current.nextNode;
      next = next.nextNode;
    }
    current.nextNode = null;
    return next;
  };

  const contains = (value) => {
    let tmp = headNode;
    while (tmp !== null) {
      if (tmp.value === value) return true;
      tmp = tmp.nextNode;
    }
    return false;
  };

  const toString = () => {
    let tmp = headNode;
    let string = "";
    while (tmp !== null) {
      string += `( ${tmp.value} ) -> `;
      tmp = tmp.nextNode;
    }
    return `${string}null`;
  };

  return {
    append,
    prepend,
    size,
    tail,
    at,
    pop,
    contains,
    toString,
  };
}
