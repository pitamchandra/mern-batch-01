Promise.resolve(5)
    .then((value) => value + 2)
    .then((value) => value * 2)
    .then((finalValue) => console.log(finalValue))