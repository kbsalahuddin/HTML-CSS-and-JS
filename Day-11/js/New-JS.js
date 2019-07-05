var btnElement= document.getElementById('btn');
			btnElement.onclick=function(){
				var firstNameValue=document.getElementById('firstName').value;
				var lastNameValue=document.getElementById('lastName').value;
				var fullName=firstNameValue+' '+lastNameValue;
				document.getElementById('fullName').value=fullName;
			};
var addBtn= document.getElementById('add');
			addBtn.onclick=function(){
				var firstNumberValue=Number(document.getElementById('firstNumber').value);
				var secondNumberValue=Number(document.getElementById('secondNumber').value);
				var result = firstNumberValue+secondNumberValue;
				document.getElementById('result').value=result;

			};
var subBtn= document.getElementById('sub');
			subBtn.onclick=function(){
				
			};
var multiBtn= document.getElementById('multiply');
			multiBtn.onclick=function(){
				
			};
var divisionBtn= document.getElementById('division');
			divisionBtn.onclick=function(){
				
			};
var remainderBtn= document.getElementById('remainder');
			remainderBtn.onclick=function(){
				
			};																			
			/*var paragraphElement=document.getElementsByTagName('p');*/
			/*document.write('<br/>'+paragraphElement[1].innerHTML);*/
			/*for(var key=0;key<paragraphElement.length;key++){
				document.write('<br/>'+paragraphElement[key].innerHTML+'<br/>');
			}*/

			/*var x;
			x=10;
			document.write(x);*/
			/*var a= new Array();
			var b= Array();
			var c= [];*/
			/*var data=[];

			data[0]=10;
			data[1]=20;
			data[2]=30;
			document.write('<br/>'+data);*/
			/*var data=[];
			data['name']='Moss';
			data['city']='Dhaka';
			data['country']='BD';*/
			/*document.write('<br/>'+'Name:'+data['name']+', '+'City:'+data['city']+', '+'Country:'+data['country']);*/
			/*for(var key in data){
				document.write('<br/>'+data[key]+'<br/>');
			}
			var numbers=[10,20,30,40,50];
			document.write(numbers);
			var info=['KBS','Dhaka','BD'];
			document.write('<br/>'+info+'<br/>');
			var d=[1,2,3,4,5];
			document.write('<br/>'+d.length);*/
			/*document.write('<br/>'+d.length -1);*//*max num of index*/
			/*function demo() {
				var firstName='K';
				var lastName='BS';
				var fullName=firstName+' '+lastName;
				document.write(fullName);
			}*/
			/*function demo(firstName, lastName){
				var fullName=firstName+' '+lastName;
				document.write(fullName);
			}*//*the function is dynamic cause it has parameters*/
			/*document.write('<br/>======<br/>');
			demo('K','BS'); *//* k , BS are the arguments here*/
			/*document.write('<br/>======<br/>');
			demo('A','Bc');
			document.write('<br/>======<br/>');
			demo('DS','HR');*/