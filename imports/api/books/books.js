import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Books = new Mongo.Collection('Books');

Meteor.methods({
  'books.insert'(book) {
    return Books.insert(book);
  }
});
