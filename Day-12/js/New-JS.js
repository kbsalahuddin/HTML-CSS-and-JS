//alert( $('#h1').text() ); //same as
//alert( $('#h1').html() );
//$('#h1').html('hello world!');
//alert(document.getElementById('h1').innerHTML);
$('#btn').click(function(){
	var firstNameValue= $('#firstName').val();
	var lastNameValue= $('#lastName').val();
	var fullNameValue= firstNameValue+' '+lastNameValue;
	//alert(fullNameValue);
	$('#fullName').val(fullNameValue);
});








/*var redBtnElement=document.getElementById('redBtn');
redBtnElement.onclick=function(){
	var divOneElement=document.getElementById('divOne');	
	//divOneElement.style.backgroundColor='red';//raw JS working with css using .style
	divOneElement.className='class-one';//calling css properties with css class using JS
};
var greenBtnElement=document.getElementById('greenBtn');
greenBtnElement.onclick=function(){
	var divOneElement=document.getElementById('divOne');	
	//divOneElement.style.backgroundColor='green';
	divOneElement.className='class-two';
};
var blueBtnElement=document.getElementById('blueBtn');
blueBtnElement.onclick=function(){
	var divOneElement=document.getElementById('divOne');	
	divOneElement.style.backgroundColor='blue';

};
var defaultBtnElement=document.getElementById('defaultBtn');
defaultBtnElement.onclick=function(){
	var divOneElement=document.getElementById('divOne');	
	divOneElement.style.backgroundColor='black';

};*/








/*var btnElement= document.getElementById('btn');
btnElement.onclick=function(){
	var startingNumberValue=document.getElementById('startingNumber').value;
	var endingNumberValue=document.getElementById('endingNumber').value;
	var res='';
	for(var x=startingNumberValue; x<=endingNumberValue; x++){
		res+= x+' ';//.write(x+ ' ');//printing all the numbers from starting number to ending number i.e.  
	}//res+= would do an addition but since res='' a strind veriable they would concate. 
	document.getElementById('result').value=res;
};*/