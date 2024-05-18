function rref(a){
	var arr = [];
	for(var i = 0; i<a.length; i++){
		arr.push([]);
		for(var j = 0; j<a.length; j++){
			arr[i].push(a[i][0]**(a.length-1-j))
		}
		arr[i].push(a[i][1]);
	}
	for(var i = 0; i<arr.length; i++){
		var pivotRow = i;
		for (var j = i + 1; j < arr.length; j++) {
			if (Math.abs(arr[j][i]) > Math.abs(arr[pivotRow][i])) {
				pivotRow = j;
			}
		}
        var temp = arr[i];
        arr[i] = arr[pivotRow];
        arr[pivotRow] = temp;
		var pivot = arr[i][i];
		for(var j = i; j<arr[i].length; j++){
			arr[i][j] /= pivot;
		}
		for(var j = 0; j<arr.length; j++){
			var factor = arr[j][i];
			for(var k = i; k<arr[j].length; k++){
				if(i!=j){
				arr[j][k] -= arr[i][k] * factor;
				arr[j][k]=arr[j][k].toFixed(6);
				}
			}
		}
	}
	var coeff = [];
	for(var i = 0; i<arr.length; i++){coeff.push(arr[i][arr[i].length-1])}
    return coeff;
}
function f(a){
	var d = [a];
	while(d[d.length-1].length>=1){
		var out = [];
		for(var i = 0; i<d[d.length-1].length-1; i++){
			out.push(d[d.length-1][i]*(d[d.length-1].length-1-i))
		}
		d.push(out);
	}
	var coeff = [];
	for(var n = 1; n<=10; n++){
		var upper = 0;
		var lower = 0;
		for(var i = 0; i<d.length; i+=2){
			upper+=d[i].reduce(function(acc,num,ind){return acc+num*Math.PI**(d[i].length-1-ind)},0)*(i%4===0?-Math.cos(n*Math.PI):i%4===2?Math.cos(n*Math.PI):0)/n**(i+1);
			lower+=d[i].reduce(function(acc,num,ind){return acc+num*(-Math.PI)**(d[i].length-1-ind)},0)*(i%4===0?-Math.cos(-n*Math.PI):i%4===2?Math.cos(-n*Math.PI):0)/n**(i+1);
		}
		coeff.push((upper-lower)/Math.PI)
	}
	return coeff;
}
