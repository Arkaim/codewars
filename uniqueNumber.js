function findUnique(numbers) {
	numbers.sort(function(a,b) {
		return a-b;
	});
	console.log(numbers);
	var cnt = 0;
	var bool = true;
	for (var i = 0; i<numbers.length/2; i+=2) {
		cnt += numbers[i];
		cnt -= numbers[i+1];
	}
	return cnt;
}

console.log (findUnique([1,4,1,3,4]));
