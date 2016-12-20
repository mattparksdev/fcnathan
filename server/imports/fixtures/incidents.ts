import Incidents from 'both/collection/incident';

import Counters from '../counters';

export default function () {
    if (Incidents.find().cursor.count() === 0) {
        Counters.incident.ticketId.increment(10000);
    }
}