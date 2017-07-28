const mongoose = require('mongoose');
const TestModel = require('../Test');

describe('Test', () => {
  beforeAll(() => {
    mongoose.connect('mongodb://localhost/test');
  });

  it('should overflow the stack', () => {
    const doc = new TestModel({
      nested: {
        arr: [
          { str: 'blabla' },
        ],
      },
    });
    return doc.save();
  });
});
