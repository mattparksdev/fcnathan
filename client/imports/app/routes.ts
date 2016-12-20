import Home from './component/home';
import Login from './component/login';

import AppRoute from './route';

const Routes: AppRoute[] = [
    { path: '', component: Home, data: { title: 'Home' } },
    { path: 'login', component: Login, data: { title: 'Log In'} }
];

export default Routes;