function curriedAdd(total) {
  if (!total) return 0
  return function addedNums(num) {
    if (!num) return total;
    total += num;
    return addedNums
  }
}

// module.exports = { curriedAdd };
