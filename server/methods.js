if (Meteor.isServer) {
	Meteor.methods({
		insertNewBill: function(billName, amount, when, who){
			Collections.Bills.insert({billName: billName, amount: amount, when: when, who: who});
		}
	})
}
