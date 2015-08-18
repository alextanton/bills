if (Meteor.isClient) {
	Template.whatisyourname.events({
		'click #nick': function(){
			Session.set("person", "Nick");
		},
		'click #chris': function(){
			Session.set("person", "Christian");
		}
	})

	Template.whatisyourname.helpers({
		'allDaBills':function(){
			return Collections.Bills.find({who: Session.get('person')}).fetch();
		},
		'dates':function(){
			return moment(this.when).format("dddd, MMMM Do YYYY");
		}
	})
}

if (Meteor.isServer) {

}
