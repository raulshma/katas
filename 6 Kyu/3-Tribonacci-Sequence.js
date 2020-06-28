function tribonacci(signature,n){
	let list = signature;
	for(let i=0;i<n-3;i++){
		list.push(list[i]+list[i+1]+list[i+2])
	}
	if(list.length>n){
   const num = list.length-n
   list.splice(-num,num)
  }
  return list;
}