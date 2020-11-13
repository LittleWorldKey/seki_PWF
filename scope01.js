
function a(){
var a=3;
var c =4;
	function b(){
		var b=2;
	console.log(a,b,c,"A");
	}
console.log(a,b,c,"B");
	var a=1;
	
	b();
	
	console.log(a,b,c,"C");	
}
var c =3;
a();
