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

const cal = (groups) => {
  let holders = [0, 0, 0];
  let lastIndex = 0;

  groups.forEach((group) => {
    do {
      const taken = Math.min(group, 5);
      group -= taken;
      holders[lastIndex] += taken;
      lastIndex = (lastIndex + 1) % holders.length;
    } while (group);
  });

  holders.map((num) => console.log(num));
};

cal([12, 0, 0]);
