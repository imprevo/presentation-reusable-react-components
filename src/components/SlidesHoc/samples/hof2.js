function sum(x, y) {
  return x + y;
}

function div(x, y) {
  return x / y;
}

function calculate(x, y) {
  return function(func) {
    return func(x, y);
  };
}

const calc3And2 = calculate(3, 2);
calc3And2(sum); // 5
calc3And2(div); // 1.5

const calc6And3 = calculate(6, 3);
calc6And3(sum); // 9
calc6And3(div); // 2
calc6And3((x, y) => Math.pow(x, y)); // 216
