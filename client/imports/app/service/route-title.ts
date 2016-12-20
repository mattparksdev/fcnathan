import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Injectable()
class RouteTitleService
{
    private _router: Router;

    private _activatedRoute: ActivatedRoute;

    public current: Observable<string[]>;

    constructor(
        router: Router,
        activatedRoute: ActivatedRoute)
    {
        this._router = router;
        this._activatedRoute = activatedRoute;

        this.current = this._router.events
            .filter(event => event instanceof NavigationEnd)
            .map(event => {
                let titles = [];

                let current = this._activatedRoute.root;

                do {
                    let routes = current.children;
                    
                    current = null;
                    
                    routes.forEach(route => {
                        if (route.outlet !== 'primary') {
                            return;
                        }

                        let title = route.snapshot.data['title'];

                        titles.push(title);

                        current = route;
                    })
                } 
                while (current);

                return titles;
            });
    }
}

export default RouteTitleService;