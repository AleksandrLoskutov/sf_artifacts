    var users = new Array("Bill", "Tom", "Alice");
var people = ["Sam", "John", "Kate"];

console.log('Function 1');
console.log(users); // ["Bill", "Tom", "Alice"]
console.log(people); // ["John", "Sam", "Kate"]

    var users = ["Tom", "Bob", "Bill"];
console.log('Function 2');
console.log(users);     //  ["Tom", "Bob", "Bill"]
var people = users;     //  shallow copy
people[1] = "John";     //  меняем 2-й элемент
console.log(users);     //  ["Tom", "John", "Bill"]
