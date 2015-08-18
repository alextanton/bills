Collections = {};
Schema = {};

Collections.Bills = new Mongo.Collection("bills");

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
  }
});

Collections.Bills.attachSchema(Schema.Bills);