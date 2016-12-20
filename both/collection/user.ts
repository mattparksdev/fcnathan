import { MongoObservable } from 'meteor-rxjs';

import User from '../model/user';
 
const UserCollection = new MongoObservable.Collection<User>(Meteor.users);

function loggedIn() {
  return !!Meteor.user();
}
 
UserCollection.allow({
  insert: loggedIn,
  update: loggedIn,
  remove: loggedIn
});

export default UserCollection;