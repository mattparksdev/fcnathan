import CollectionObject from './collection-object';

interface User 
    extends CollectionObject, Meteor.User
{
}

export default User;