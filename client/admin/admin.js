
if (Meteor.isClient) {
	Template.admin.helpers({
		logOut: function(){
			Router.go('bills');
		}
	})

	Template.insertBills.events({
		
	})
}
