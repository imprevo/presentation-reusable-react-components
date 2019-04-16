function loadData() {
  return new Promise((r) => setTimeout(() => r(Date.now()), 1000));
}

export { loadData };
