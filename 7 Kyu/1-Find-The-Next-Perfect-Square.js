function findNextSquare(sq) {
    if (Math.sqrt(sq) % 1 !== 0) return -1;
    let i = sq + 1;
    while (i) {
        if (Math.sqrt(i) % 1 === 0) {
            return i;
        }
        i++;
    }
    return sq;
}

function findNextSquare(sq) {
    if(Math.sqrt(sq)%1!==0) return -1;
    const n = (parseInt(Math.floor(Math.sqrt(sq))))+1;
    return n*n;
}