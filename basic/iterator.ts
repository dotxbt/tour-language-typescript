// [1] for
const forExample = () => {
  let dataArray = [1, "ini string", false];
  console.log("for -- array");
  for (let item of dataArray) {
    console.log(item);
  }

  let dataList = [1, 2, 3, 4];
  console.log("\nfor -- list");
  for (let item in dataList) {
    console.log(item);
  }
};

// [2]

// test code
// [1]
forExample();
