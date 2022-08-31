const input = [6, 5, 3];

// Output
// 8
// 1
// 5

const groups = [6];
// Output
// 5
// 1
// 0
let holders = [0, 0, 0];
let lastIndex = 0;

groups.forEach((group) => {
  do {
    const firstGroup = Math.trunc(group / 5);

    if (firstGroup >= 1) {
      holders[lastIndex] += 5;
    } else {
      holders[lastIndex] += group % 5;
    }

    if (lastIndex == 2) {
      lastIndex = 0;
    } else {
      lastIndex++;
    }
  } while (true);
  //    while (Math.trunc(group / 5) !== 0) {
  //    }
});

holders.map((num) => console.log(num));
