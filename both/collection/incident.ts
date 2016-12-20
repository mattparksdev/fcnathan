import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { MongoObservable } from 'meteor-rxjs';
import SimpleSchema from 'simpl-schema';

import Incident from '../model/incident';

const Collection = new Mongo.Collection<Incident>('incident');

const IncidentCollection = new MongoObservable.Collection(Collection);

Collection.attachSchema(
    new SimpleSchema({
        title: {
            type: String,
            label: 'Title',
            max: 50
        },
        description: {
            type: String,
            label: 'Description',
            max: 200
        },
        ticketId: {
            type: Number,
            optional: true,
            denyInsert: true,
            denyUpdate: true
        }
    }));

function loggedIn() {
    return !!Meteor.user();
}

IncidentCollection.allow({
    insert: loggedIn,
    update: loggedIn,
    remove: loggedIn
});

export { Collection };

export default IncidentCollection;