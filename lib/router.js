Router.configure({
  waitOn: function() {
    return [
      Meteor.subscribe('Bills')
    ];
  }
});

Router.route('bills', {
  path: '/',
  waitOn: function() {
    return [
      Meteor.subscribe('Bills')
    ];
  },
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
  action: function() {
    if (this.ready()) {
      this.render('admin');
    }
  }
});

Router.route('signup', {
  path: 'signup',
  action: function() {
    this.render('signup');
  }
});
