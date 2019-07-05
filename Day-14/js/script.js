function checkFirstName(){
	var firstNameLength=$('#firstName').val().length;
	if(firstNameLength>=6 && firstNameLength<=15){
		$('#firstNameError').text(' ');
	}else{
		$('#firstNameError').text('first name should be between 6-15 characters');
	}
}
//$('#firstName').click(function(){
//	checkFirstName();	

//});
$('#firstName').blur(function(){
	checkFirstName();

});
$('#firstName').keyup(function(){
	checkFirstName();
});

function checkLastName(){
	var lastNameLength=$('#lastName').val().length;
	if(lastNameLength>=6 && lastNameLength<=15){
		$('#lastNameError').text(' ');
	}else{
		$('#lastNameError').text('last name should be between 6-15 characters');
	}
}
//$('#lastName').click(function(){
//	checkLastName();	

//});
$('#lastName').blur(function(){
	checkLastName();

});
$('#lastName').keyup(function(){
	checkLastName();
});

//email 
function checkEmailAddress(){
	var pattern= new RegExp(/^[+a-zA-Z0-9]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
	if(pattern.test($('#emailAddress').val())){
		$('#emailAddressError').text('');
	}else{
		$('#emailAddressError').text('email address is invalid');
	}
}
//$('#emailAddress').click(function(){
//	checkEmailAddress();	

//});
$('#emailAddress').blur(function(){
	checkEmailAddress();

});
$('#emailAddress').keyup(function(){
	checkEmailAddress();
});
//password
function checkPassword(){
	var passwordLength=$('#password').val().length;
	if(passwordLength>=8 && passwordLength<=15){
		$('#passwordError').text(' ');
	}else{
		$('#passwordError').text('password name should be between  8-15 characters');
	}
}
$('#password').blur(function(){
	checkPassword();

});
$('#password').keyup(function(){
	checkPassword();
});
//showing password
$(document).ready(function(){
	$('#showPassword').click(function(){
		if($('#password').attr('type')=='text'){
			$('#password').attr('type','password');
		}else{
			$('#password').attr('type','text');
		}
	});
});
//confirm password
function checkConfirmPassword(){
	var confirmPassword=$('#confirmPassword').val();
	var password=$('#password').val();
	if(confirmPassword==password){
		$('#confirmPasswordError').text(' ');
	}else{
		$('#confirmPasswordError').text('password did not match');
	}
}
$('#confirmPassword').blur(function(){
	checkConfirmPassword();

});
$('#confirmPassword').keyup(function(){
	checkConfirmPassword();
});
//showing confirmed password
$(document).ready(function(){
	$('#showConPassword').click(function(){
		if($('#confirmPassword').attr('type')=='text'){
			$('#confirmPassword').attr('type','password');
		}else{
			$('#confirmPassword').attr('type','text');
		}
	});
});
//district name selection check
function checkDistrictName(){
	var districtNameValue=$('#districtName').val();
	if(districtNameValue==' '){
		$('#districtNameError').text('you need to select a district name');
	}else {
		$('#districtNameError').text(' Thanks for selecting a district');
		
	}
}
$('#districtName').change(function(){
	checkDistrictName();
});

$('#registration').submit(function(){
		checkFirstName();
		checkLastName();
		checkEmailAddress();
		checkPassword();
		checkConfirmPassword();
		checkDistrictName();
		if(firstNameError==false && lastNameError==false && emailAddressError==false && passwordError==false && confirmPasswordError==false && districtNameError==' '){
			alert('Registration Successful');
			return true;
		}else{
			alert('Please fill the form Correctly');
			return false;
		}
		
		
	});