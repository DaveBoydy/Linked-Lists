import LinkedList from "./linked-list.js";

const list = LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log("Size:", list.size());
console.log("Head:", list.head());
console.log("Tail:", list.tail());
console.log("At index:", list.at(0));
console.log("Pop:", list.pop());
console.log("Print list:", list.toString());
console.log("Contains value:", list.contains("snake"));
console.log("Contains value:", list.contains("monkey"));

console.log("Find index value:", list.find("snake"));

list.prepend("monkey");

list.insertAt("horse", 3);

console.log("Print list:", list.toString());
console.log("Pop:", list.pop());
list.removeAt(3);
console.log("Print list:", list.toString());
