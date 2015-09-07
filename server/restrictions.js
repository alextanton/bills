Collections.Bills.allow({
  insert: function(){
    return Meteor.userId().length > 0;
  },
  remove: function(){
    return Meteor.userId().length > 0;
  },
  update: function(){
  	return Meteor.userId().length > 0;
  }
});

Meteor.users.allow({
	insert: function(){
    return Meteor.userId().length > 0;
  },
  remove: function(){
    return Meteor.userId().length > 0;
  },
  update: function(){
  	return Meteor.userId().length > 0;
  }
})