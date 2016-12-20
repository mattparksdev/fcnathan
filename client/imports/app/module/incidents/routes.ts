import AppRoute from '../../route';

import IncidentsComponent from './component/incidents';
import IncidentListComponent from './component/incident-list';
import IncidentDetailComponent from './component/incident-detail';

const Routes: AppRoute[] = [{
    path: 'incidents',
    data: { title: 'Dashboard' },
    component: IncidentsComponent,
    canActivate: ['isLoggedIn'],
    children: [{
        path: 'add',
        component: IncidentDetailComponent,
        data: { title: 'Add Incident' }
    },
    {
        path: ':incidentId',
        component: IncidentDetailComponent,
        data: { title: 'Edit Incident' }
    },
    {
        path: '',
        component: IncidentListComponent,
        data: { title: 'Incidents' }
    }]
}];

export default Routes;