const items = [
  { name: "Laptop", price: "30000" },
  { name: "pen", price: "10" },
  { name: "Interner", price: "250" },
  { name: "Geans", price: "300" },
  { name: "Tshirt", price: "80" },
  { name: "coffee", price: "3" }
];

// 1. filter function : take and array , apply logic required , rows that satisfies condition are returned
// can ne stored in new var so that it doesnt replace the original array
const filterItems = items.filter(item => {
  return item.price < 350;
});
console.log(filterItems);

// 2. map function : take object as argument take one key and convert it into array
const mapNames = items.map(item => {
  return item.name;
});
console.log(mapNames);

// 3. find function : used to find an item from an object that matches with provided value
const findItem = items.find(item => {
  return item.name === "Tshirt";
});
console.log(findItem);

// 4. foreach : loop the items within array
items.forEach(item => {
  console.log(item.name);
});

// 5. some : return  boolean value. return true if the given condition matches for atleast one item
// else return  false
const getSome = items.some(item => {
  return item.price > 50000;
});
console.log(getSome);

// 6. every : return  boolean value. return true if the given condition matches for all item
// else return  false
const getEvery = items.every(item => {
  return item.price > 2;
});
console.log(getEvery);

// 7. Reduce : reduce method executes for every item in array,
// takes two argument, first is the value returned by executing previous iteration of array. In first iteration, the argument is equal to provided default value
// the second argument is the item of array
const gettotal = items.reduce((currentTotal, item) => {
  return currentTotal + parseInt(item.price);
}, 0);
console.log(gettotal);

// 8. Include : check if an item is present in array or not
const arr = [1, 2, 3, 4, 5, 6];
let includeStatus = arr.includes(1);
console.log(includeStatus);
