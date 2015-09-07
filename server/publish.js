Meteor.publish("Bills", function() { 
  return Collections.Bills.find({});
});

Meteor.publish("users", function() {
  return Meteor.users.find({});
});