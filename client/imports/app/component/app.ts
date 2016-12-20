import { Meteor } from 'meteor/meteor';
import { Component, OnInit } from '@angular/core';

import { InjectUser } from 'angular2-meteor-accounts-ui';

import RouteTitleService from '../service/route-title';

import BaseComponent from './base';

import style from './app.scss';
import template from './app.html';

@InjectUser('user')
@Component({ selector: 'app', template, styles: [style] })
class AppComponent
    extends BaseComponent
    implements OnInit
{
    private _routeTitleService: RouteTitleService;

    public routeTitles: string[];

    constructor(routeTitleService: RouteTitleService) {
        super();

        this._routeTitleService = routeTitleService;
    }

    ngOnInit(): void {
        this.routeTitles = [];

        this.track(
            this._routeTitleService.current.subscribe(titles => {
                this.routeTitles = titles;
            }));
    }

    logout(): void {
        Meteor.logout();
    }
}

export default AppComponent;