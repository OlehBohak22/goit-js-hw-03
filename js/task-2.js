function makeArray(firstArray, secondArray, maxLength) {
  if (maxLength === 0) {
    return [];
  }
  const newArr = firstArray.concat(secondArray);

  if (newArr.length > maxLength) {
    return newArr.slice(0, maxLength);
    // for (let el of newArr) {
    //   newArr.pop(el);
    //   if (newArr.length == maxLength) {
    //     break;
    //   }
    // }
  }
  return newArr;
}

console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []
