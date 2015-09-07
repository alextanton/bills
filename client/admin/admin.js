
if (Meteor.isClient) {
	Template.admin.helpers({
		logOut: function(){
			Router.go('bills');
		}
	})

	Template.removeBill.helpers({
		nicksBills: function(){
			return Collections.Bills.find({who: "Nick"}).fetch();
		},
		chrisBills: function(){
			return Collections.Bills.find({who: "Nick"}).fetch();
		},
		chrisBills: function(){
			return Collections.Bills.find({who: "Christian"}).fetch();
		},
		'dates':function(){
			return moment((this.when.getTime() + 86400000)).format("MMMM Do YYYY");
		},
		'money':function(){
			return this.amount.toFixed(2);
		}
	})

	Template.removeBill.events({
		'click #close': function(){
		    if (confirm("Are you sure you want to delete " + this.who + "'s bill of $" + this.amount + "?") == true) {
		        Collections.Bills.remove(this._id);
		    } else {
		        //
		    }
		}
	})

	Template.userList.helpers({
		"users": function(){
			return Meteor.users.find().fetch();
		}
	})

	Accounts.ui.config({
  		passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
	});
}
