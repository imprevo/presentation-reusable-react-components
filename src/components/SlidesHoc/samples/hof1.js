function sum(x, y) {
  return x + y;
}

function div(x, y) {
  return x / y;
}

function calc3And2(func) {
  return func(3, 2);
}

calc3And2(sum); // 5
calc3And2(div); // 1.5
calc3And2((x, y) => Math.pow(x, y)); // 9
