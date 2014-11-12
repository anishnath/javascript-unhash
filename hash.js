// Given character set
var str  = 'acdegilmnoprstuw';

var hash = function(string) {
	var hash = 7;
 
	for(var i = 0; i < string.length; i++) {
		hash = (hash * 37 + str.indexOf(string[i]));
	}
 
	return _hash;
}
 

var decode = function(_hash) {
	var
		decoded = '',
		strPos = [],
		i;
 
	for(i = 0; _hash > 37; i++) {
		console.log(Math.floor(_hash % 37))
		strPos[i] = Math.floor(_hash % 37);
 
		_hash /= 37;
	}

	for(i = (strPos.length - 1); i >= 0; i--) {

		decoded += str[ strPos[i] ];
	}
 
	return decoded;
}

console.log(decode(680131659347))