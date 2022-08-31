const input = [6, 5, 3];

// Output
// 8
// 1
// 5

const groups = [12];
// Output
// 5
// 5
// 2
let holder = [0, 0, 0];

groups.forEach((group) => {
  holder = holder.map(() => {});
});

holder.map((num) => console.log(num));
