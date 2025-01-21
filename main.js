import LinkedList from "./linked-list.js";

const list = LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log("Size:", list.size());
console.log("Tail:", list.tail());
console.log("At:", list.at(5));
console.log("Pop:", list.pop());
console.log("Print list:", list.toString());
console.log("Contains value:", list.contains("snake"));
console.log("Contains value:", list.contains("turtle"));

list.prepend("monkey");

console.log("Print list:", list.toString());
console.log("Pop:", list.pop());
console.log("Print list:", list.toString());
