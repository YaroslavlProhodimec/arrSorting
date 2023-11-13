let names = ["sasha", "oleg", "vitor"];
let height = [170, 180, 110];
const arrSorting = (name, height) => {
  let result = [];

  for (let i = 0; i < name.length; i++) {
    let char = name[i];
    let h = height[i];
    result[i] = { name: char, height: h };
  }

  for (let j = 0; j < result.length; j++) {
    for (let i = 0; i < result.length - 1 - j; i++) {
      if (result[i].height > result[i + 1].height) {
        let tmp = result[i];
        result[i] = result[i + 1];
        result[i + 1] = tmp;
      }
    }
  }
  return result;
};

console.log(arrSorting(names, height));

const arrSort = (n, h) => {
  let newArr = n.map((el, index) => {
    return { name: el, height: h[index] };
  });

  newArr.sort((a, b) => a["height"] - b["height"]);

  return newArr.map(({ name }) => name);
};
console.log(arrSort(names, height));

const sum = (n) => {
  let result = 1;
  for (let i = 0; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
      result += i;
    }
  }

  return result;
};

console.log(sum(11));

let str = [
  "alice and bob love leedCode",
  "i think so too",
  "this is great thanks very mutch",
];
const lengthWord = (str) => {
  let max = 0;
  str.forEach((el) => {
    const length = el.split(" ").length;
    max = length > max ? length : max;
  });

  return max;
};

console.log(lengthWord(str));
