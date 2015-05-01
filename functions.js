 //P2 req 4-A
function isArmStrong(n){
	"use strict";
	//declare local variables
	var sum = 0;
	//convert tnum to a String
	n = String(n);
	//Traverse the number
	for(var i= 0; i<n.length; ++i) {
		sum= sum + Math.pow(Number(n[i]), n.length);
	}

	if (sum == n)
		return true;
	else return false;

}


//P2 req. 4-B
var allArmStrongs = function(){
	"use strict";
	//declare local variables
	var result = "";
	//generate all 3 digit positive integers
	for(var i = 1; i <= 100000; i++) {
		//test
		if(isArmStrong(i))
			result = result + i + " ";
	}

	return result;

}

//P2 req. 4-C
var allSubstrings1 = function(s){
	var result = "";
	for(var i = 0; i<=s.length; ++i){
		for(var b = i+1; b <= s.length; ++b){
			result = result + s.substring(i , b) + "," + " ";
		}
	}
	return result;
}

//P2 req. 4-D
var allSubstrings2 = function(s){
	var result = [];
	//var result ="";
		for(var i = 0; i<= s.length; ++i){
		   for(var b = i+1; b <= s.length; ++b){
			var st= s.substring(i , b);
			//result = result + s + " ";
			result.push(st);
			//console.log(result);
		}
			//result = []
	}
	return result;
}

//P2 req. 4-E
var maxWord = function(s){
	"use strict";
	var words = s.split(" ");
	var length = 0;
	var longest= "";
	for(var j =0; j < words.length; j++){
		if(longest < words[j].length){
			longest = words[j].length;
			length = words[j];
		}
	}
	return length; 
}