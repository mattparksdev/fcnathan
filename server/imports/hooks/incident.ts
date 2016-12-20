import Counters from '../counters';

import { Collection as Incidents } from 'both/collection/incident';

Incidents.before.insert((userId, doc) => {
    (<any>doc).ticketId = Counters.incident.ticketId.increment();
});