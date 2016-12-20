import Incidents from '../../../both/collection/incident';
 
Meteor.publish('incidents', () => Incidents.find());