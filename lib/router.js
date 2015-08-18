/*Router.configure({
  waitOn: function() {
    return [
      Meteor.subscribe('users'),
      Meteor.subscribe('bills'),
    ];
  }
});*/

Router.route('bills', {
  path: '/',
  action: function() {
    this.render('bills');
  }
});

Router.route('login', {
  path: 'login',
  action: function() {
    this.render('login');
  }
});

Router.route('admin', {
  path: 'admin',
  /*waitOn: function() {
    return Meteor.subscribe('bills');
  },*/
  action: function() {
    if (this.ready()) {
      this.render('admin');
    }
  }
});