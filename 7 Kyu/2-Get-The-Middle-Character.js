function getMiddle(s) {
    const middle = s.length / 2;
    const f = Math.floor
    if (middle % 1 !== 0) {
        return s[f(middle)]
    }
    return s[f(middle)-1]+s[f(middle)]
}