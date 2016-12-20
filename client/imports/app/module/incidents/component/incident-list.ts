import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { MeteorObservable } from 'meteor-rxjs';

import Incident from 'both/model/incident';
import Incidents from 'both/collection/incident';

import BaseComponent from '../../../component/base';

import style from './incident-list.scss';
import template from './incident-list.html';
 
@Component({ template, styles: [style] })
class IncidentListComponent
    extends BaseComponent
    implements OnInit
{
    public incidents: Observable<Incident[]>;

    constructor() {
        super();
    }

    ngOnInit(): void {
        this.incidents = Incidents.find({}).zone();

        this.track(
            MeteorObservable
                .subscribe('incidents')
                .subscribe());
    }
}

export default IncidentListComponent;