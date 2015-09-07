if (Meteor.isClient) {
	Template.bills.helpers({
		logOut: function(){
			Router.go('login');
		}
	})

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
			return Collections.Bills.find({who: Session.get('person')}, {sort: {when: 1}}).fetch();
		},
		'dates':function(){
			return moment((this.when.getTime() + 86400000)).format("dddd, MMMM Do YYYY");
		},
		'areResults': function(){
			if(Collections.Bills.find({who: Session.get('person')}).fetch().length == 0){
				return false;
			} else {
				return true;
			}
		},
		'money':function(){
			return this.amount.toFixed(2);
		},
		'test': function(){
			d = new Date(); 
			arr = Collections.Bills.find({who: Session.get('person')}).fetch();
			for(i=0;i<arr.length;i++){
				if(arr[i].when.getTime() < d.getTime()){
					Collections.Bills.update({_id: arr[i]._id}, {$set: {late: "True"}});
				}
			}
		},
		'late': function(){
			if(this.late == "True"){
				return true;
			}
		}
	})

	Template.chat.events({
		'click #chat': function(){
    		$("#message").draggable();
			Session.setDefault('viewChat', true);
			mess = document.getElementById('message');
			if(Session.get('viewChat') == true){
				mess.style.visibility = "visible";
				Session.set('viewChat', false);
			} else {
				Session.set('viewChat', true);
				mess.style.visibility = "hidden";
			}
		}
	})
}

if (Meteor.isServer) {

}
