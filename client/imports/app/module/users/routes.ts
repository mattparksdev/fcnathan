import AppRoute from '../../route';

import UsersComponent from './component/users';
import UserListComponent from './component/user-list';
import UserDetailComponent from './component/user-detail';

const Routes: AppRoute[] = [{
    path: 'users',
    data: { title: 'Users' },
    component: UsersComponent,
    canActivate: ['isLoggedIn'],
    children: [{
        path: 'add',
        component: UserDetailComponent,
        data: { title: 'Add' }
    },
    {
        path: ':userId',
        component: UserDetailComponent,
        data: { title: 'Edit' }
    },
    {
        path: '',
        component: UserListComponent,
        data: { title: 'List' }
    }]
}];

export default Routes;