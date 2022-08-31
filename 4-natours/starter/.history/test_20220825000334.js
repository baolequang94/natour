const groups = [6, 5, 3];

// Output
// 8
// 1
// 5

// const groups = [6];
// Output
// 5
// 1
// 0
let holders = [0, 0, 0];
let lastIndex = 0;

groups.forEach((group) => {
  do {
    // const dividedGr = Math.trunc(group / 5);

    // if (dividedGr >= 1) {
    //   holders[lastIndex] += 5;
    //   group = group - 5;
    // } else {
    //   holders[lastIndex] += group % 5;
    //   group = 0;
    // }

    const isFull = group / 5 >= 1;

    holders[lastIndex] += isFull ? 5 : group % 5;
    group = isFull ? group - 5 : 0;

    lastIndex = lastIndex === 2 ? 0 : ++lastIndex;
  } while (group);
});

holders.map((num) => console.log(num));
