// const groups = [6, 5, 3];

// Output
// 8
// 1
// 5

// const groups = [6];
// Output
// 5
// 1
// 0

// const cal = (groups) => {
//   let holders = [0, 0, 0];
//   let lastIndex = 0;

//   groups.forEach((group) => {
//     do {
//       const taken = Math.min(group, 5);
//       group -= taken;
//       holders[lastIndex] += taken;
//       lastIndex = (lastIndex + 1) % holders.length;
//     } while (group);
//   });

//   holders.map((num) => console.log(num));
// };

// cal([16, 3, 0]);

const circularArrayRotation = (arr, k, query) => {
  const arrCopy = [...arr];
  for (let i = 0; i < k; i += 1) {
    arrCopy.unshift(arrCopy.pop());
  }

  return query.map(() => arrCopy[qu]);
};

console.log(circularArrayRotation([3, 1, 2], 2, 0));
//expect ra 2

// def circularArrayRotation(a, k, queries):
// r_index = (len(a) - k) % len(a)
// rotated = a[r_index:] + a[:r_index]
// result = [rotated[i] for i in queries]
// return result
