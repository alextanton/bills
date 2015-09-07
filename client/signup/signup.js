if (Meteor.isClient) {
	Meteor.startup(function() {
    	reCAPTCHA.config({
        	publickey: '6Le96AsTAAAAAAdjnQHP5P4dAFeJOpcus6PRBFyb'
    	});
	});
	Template.signup.rendered=function() {
    	$('#date').datepicker();
	}

	Template.signup.events({
		'blur #confirm': function(event){
			pass = document.getElementById("password").value;
			if(pass == "" || event.target.value == ""){
				$('#pass').addClass("has-error");
				$('#con').addClass("has-error");
			}else if(pass == event.target.value){
				$('#pass').removeClass("has-error");
				$('#con').removeClass("has-error");
				$('#pass').addClass("has-success");
				$('#con').addClass("has-success");
			} else {
				$('#pass').addClass("has-error");
				$('#con').addClass("has-error");
			}
		}
	})

	Template.animate.onRendered(function(){
		setTimeout(function(){$('#box').fadeIn()}, 3000);	
	})

	Template.animate.events({
		'click #box': function(){
			$('#box').addClass("poop")
		}
	})

	Template.signup.events({
		'submit': function(event){
			event.preventDefault();
			var user = {username: document.registration.username,
						email: document.registration.email,
						password: document.registration.password,
						confirm: document.registration.confirm}
			if(user.password != user.confirm){
				//$("#username").toggleClass('')
			}
		}
	})

}
