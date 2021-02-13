function uniqueInOrder(arg) {
  let newArgs = [];
  for (let i = 0; i < arg.length; i++) {
    if (arg[i] !== arg[i - 1]) {
      newArgs.push(arg[i]);
    }
  }
  return newArgs;
}