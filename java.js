
function f(val) {
	document.getElementById('input1').value+=val

}
function sol(){
	var a = document.getElementById('input2').value
	var b=eval(a)
	document.getElementById('output1').value = b
}
function clr(){
	document.getElementById('input1').value = ""
	document.getElementById('output1').value = ""
	document.getElementById('input2').value = ""
}
function s(val){
	document.getElementById('input2').value+=val
}
function backspace(){
	var s=document.getElementById('input1').value
	document.getElementById('input1').value = s.substr(0,s.length-1)
	var d=document.getElementById('input2').value
	document.getElementById('input2').value = d.substr(0,d.length-1)
}