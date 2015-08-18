Template.login.events({
    'submit form': function(event){
        event.preventDefault();
        var email = $('[name=username]').val();
        var password = $('[name=password]').val();
        Meteor.loginWithPassword(email, password, function(err){
        	if(err) {
        		var error = document.getElementById('login-fail');
        		error.style.visibility = 'visible';
        	} else {
        		Router.go('admin');
        	}
        });
    }
});

