(function () {
	'use strict';

angular
    .module('app')
    .service('donationService', donationService);

donationService.$inject = ['$q']

function donationService($q) {

	var service = {
		submitDonation: submitDonation

	};

	return service;

	function submitDonation(donation) {
		return $q(function(success,reject){
			return validateDonation().then(function(){
				success();
			});
		})
		

	}

	function validateDonation(donation) {
		return $q(function(success, reject) {
    		var emailFilter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    		
    		// Zipfilter source: http://stackoverflow.com/questions/160550/zip-code-us-postal-code-validation
    		var zipFilter = /^\d{5}(-\d{4})?$/;

/*     		Alternative phone match: /^\(?[0-9]{3}(\-|\)) ?[0-9]{3}-[0-9]{4}$/
     		Source: http://stackoverflow.com/questions/18375929/validate-phone-number-using-javascript
     		Validates: {
     			'123-345-3456';
				// '(078)789-8908';
				// '(078) 789-8908';
     		}
*/


			if(!donation.hasOwnProperty('field_donation_first_name')) {
				reject('Missing firstName property');
			}

			if(!donation.hasOwnProperty('field_donation_last_name')) {
				reject('Missing lastName property');
			}

			if(!donation.hasOwnProperty('field_donation_email_address') | !emailFilter.test(donation.emailAddress)) {
				reject('Missing/Incorrect emailaddress property');
			}

			if(!donation.hasOwnProperty('field_donation_phone') | donation.phone.match(/\d/g).length===10) {
				reject('Missing/Incorrect phone property');
			}

			if(!donation.hasOwnProperty('field_donation_address')) {
				reject('Missing address property');
			}

			if(!donation.hasOwnProperty('field_donation_city')) {
				reject('Missing city property');
			}

			if(!donation.hasOwnProperty('field_donation_state_province')) {
				reject('Missing state/province property');
			}

// Can also autopopulate city and state via zipcode (Source: http://stackoverflow.com/questions/6021838/auto-fill-for-state-city-using-zipcode)
			if(!donation.hasOwnProperty('field_donation_zip_code') | !zipFilter.test(donation.zipCode)) {
				reject('Missing zipCode property');
			}




// function ValidateEmail(mail)   
// {  
//  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myForm.emailAddr.value))  
//   {  
//     return (true)  
//   }  
//     alert("You have entered an invalid email address!")  
//     return (false)  
// }  


function checkEmail() {

    var email = document.getElementById('txtEmail');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
 }
}</script>





			success();
		});
		
	}

 