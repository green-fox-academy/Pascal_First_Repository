function filter(arr) {
  let arr2 = [];
  while (arr.length !== 0) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    arr2.push(arr[randomIndex]);
    arr.splice(randomIndex, 1);
  }
  return arr2;
}

console.log(filter(arr));
