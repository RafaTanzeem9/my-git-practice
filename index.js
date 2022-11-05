const str = "Rafa Tanzeem";

function countWovel(str) {
  return str.match(/[aeiou]/g).length;
}
const count = countWovel(str);
console.log(count);
