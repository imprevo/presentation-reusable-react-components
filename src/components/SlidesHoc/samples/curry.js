function sum(x, y) {
  return x + y;
}

sum(1, 2); // 3

function currySum(x) {
  return function(y) {
    return x + y;
  };
}

currySum(1)(2); // 3
