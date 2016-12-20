import Users from '../../../both/collection/user';
 
Meteor.publish('users', () => Users.find());