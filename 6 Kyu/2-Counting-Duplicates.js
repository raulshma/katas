function duplicateCount(text){
	let distinctChars = {}
	let count = 0;
	let allChars=text.split('')
	for(let c of allChars){
		const cNew= c.toLowerCase();
		distinctChars[cNew]= distinctChars[cNew] ? distinctChars[cNew]+1:1
	}
	Object.keys(distinctChars).filter((e)=>{
		distinctChars[e]>1?count++:0;
	})
	return count;
}
