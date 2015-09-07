if (Meteor.isServer) {
	Meteor.startup(function() {
	console.log("This is the server!")
    reCAPTCHA.config({
        privatekey: '6Le96AsTAAAAAGaf2z1S3_wmA2TWfrxRCyzFzMHG'
    });
});
}
