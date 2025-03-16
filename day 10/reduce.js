Promise.all([
  new Promise((resolve) => setTimeout(() => resolve("Task A done"), 1000)),
  new Promise((resolve) => setTimeout(() => resolve("Task B done"), 500)),
])
  .then(([task1, task2]) => {
    // console.log(resultA, resultB);
    console.log(task1, task2);
    return new Promise((resolve) =>
      setTimeout(() => resolve("Final Task done"), 700)
    );
  })
  .then((finalResult) => console.log(finalResult));
