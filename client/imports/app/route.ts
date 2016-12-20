import { Route } from '@angular/router';

interface AppRoute
    extends Route
{ 
    data: {
        title: string;
    },

    children?: AppRoute[]
}

export default AppRoute;