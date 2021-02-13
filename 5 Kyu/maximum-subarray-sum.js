function maxSequence(arr) {
  const hasPositive = arr.some((i) => i > 0);
  if (!hasPositive) return 0;
  let total = 0;
  let current_total = 0;
  for (let i = 0; i < arr.length; i++) {
    current_total = current_total + arr[i];
    if (current_total < 0) current_total = 0;
    else if (total < current_total) total = current_total;
  }
  return total;
}
