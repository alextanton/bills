Collections = {};
Schema = {};

Collections.Bills = new Mongo.Collection("bills");
Collections.Messages = new Mongo.Collection("messages");
Collections.Users = Meteor.users;
Collections.Roles = Meteor.roles;

Schema.Bills = new SimpleSchema({
  billName: {
    type: String,
    label: "Bill Name",
    max: 200
  },
  amount: {
    type: Number,
    decimal: true,
    label: "Bill Amount"
  },
  when: {
    type: Date,
    label: "Due By",
  },
  who: {
    type: String,
    label: "Who",
    allowedValues: ['Nick', 'Christian']
  },
  late: {
    type: String,
    defaultValue: "False"
  }
});

Schema.User = new SimpleSchema({
  username: {
    type: String,
    label: "Username",
    regEx: /^[a-z0-9A-Z_]{3,20}$/,
  },    
  createdAt: {
      type: Date,
      optional: true,
      denyUpdate: true
  },
  lastLogged:{
    type: Date,
    optional: true
  },
  profile: {
      type: Schema.UserProfile,
      optional: true
  },
  password:{
    type: String,
    min: 8,
    optional: true
  },
  passwordconfirm: {
    type: String,
    min: 8,
    optional: true,
    label: "Password Confirmation",
    custom: function() {
      if (this.value !== this.field('password').value) {
        return "passwordMissmatch";
      }
    }
  },
  roles: {
      type: [String],
      optional: true
  },
  email: {
    type: String,
    optional: true
  }
});

Schema.UserProfile = new SimpleSchema({
  fName: {
    type: String,
    label: "First Name",
    regEx: /^[a-zA-Z-]{2,25}$/,
    optional: true
  },
  lName: {
    type: String,
    label: "Last Name",
    regEx: /^[a-zA-Z]{2,25}$/,
    optional: true
  }
})

Collections.Bills.attachSchema(Schema.Bills);
Collections.Roles.attachSchema(Schema.Role);
Collections.Users.attachSchema(Schema.User);