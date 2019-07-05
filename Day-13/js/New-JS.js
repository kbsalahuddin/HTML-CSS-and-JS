
//to create gallery by JDOM
$('#img1').click(function(){
	var imgSrcValue=$(this).attr('src');
	$('#mainImage').attr('src',imgSrcValue);
});//$(this)=$('#img1') here
$('#img2').click(function(){
	var imgSrcValue=$(this).attr('src');
	$('#mainImage').attr('src',imgSrcValue);
});
$('#img3').click(function(){
	var imgSrcValue=$(this).attr('src');
	$('#mainImage').attr('src',imgSrcValue);
});
$('#img4').click(function(){
	var imgSrcValue=$(this).attr('src');
	$('#mainImage').attr('src',imgSrcValue);
});//to create gallery by JDOM











//DOM related work
/*function demo(){

	var headingElement=document.createElement('h1');
	var paraElement=document.createElement('p');
	headingElement.innerHTML="this isi a lorum ipsum";
	paraElement.innerHTML="this is a paragraph";

	document.getElementById('div').appendChild(headingElement);
	document.getElementById('div').appendChild(paraElement);
};
document.getElementById('btn').onclick=function(){
	demo();
};*/



/*var firstName=document.getElementById('first_name');
var lastName=document.getElementById('last_name');
firstName.onkeyup=function(){
	var x=document.getElementById('first_name').value;
	document.getElementById('first').innerHTML=x;
};
lastName.onkeyup=function(){
	var y=document.getElementById('last_name').value;
	document.getElementById('last').innerHTML=y;
};
lastName.onblur=function(){
	var x=document.getElementById('first_name').value;
	var y=document.getElementById('last_name').value;
	var z=x+' '+y;
	document.getElementById('full').innerHTML=z;
};*/
//same work with JQuery
/*$('#first_name').keyup(function(){
	var firstNameValue= $('#first_name').val();
	$('#first').text(firstNameValue);
});
$('#last_name').keyup(function(){
	var lastNameValue= $('#last_name').val();
	$('#last').text(lastNameValue);
});
$('#last_name').blur(function(){
	var firstNameValue=$('#first_name').val();
	var lastNameValue=$('#last_name').val();
	$('#full').html(firstNameValue+' '+lastNameValue);
});*/