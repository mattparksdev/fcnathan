import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import BaseComponent from '../../../component/base';

import Incident from 'both/model/incident';
import Incidents from 'both/collection/incident';

import template from './incident-detail.html';

@Component({ template })
class IncidentDetailComponent
    extends BaseComponent
    implements OnInit
{
    private _route: ActivatedRoute;
    private _router: Router;
    private _incidentId: string;
    private _formBuilder: FormBuilder;

    public incident: Incident;
    public form: FormGroup;

    constructor(
        route: ActivatedRoute,
        router: Router,
        formBuilder: FormBuilder) 
    {
        super();

        this._route = route;
        this._router = router;
        this._formBuilder = formBuilder;
    }

    ngOnInit(): void {
        this.form = this._formBuilder.group({
            title: ['', Validators.required],
            description: ['', Validators.required]
        });

        this.track(
            this._route.params
                .map(params => params['incidentId'])
                .subscribe(incidentId => {
                    this._incidentId = incidentId;
                    
                    if (this._incidentId) {
                        this.incident = Incidents.findOne(incidentId);

                        // todo: check if not found
                    }

                    if (this.incident) {
                        this.form.setValue({
                            title: this.incident.title || '',
                            description: this.incident.description || ''
                        });
                    } else {
                        this.form.reset();
                    }
                }));
    }

    save(): void {
        if (!this.form.valid) {
            return;
        }

        let value = this.form.value;

        if (this.incident) {
            // todo: validate
            // todo

            Incidents.update(this.incident._id, {
                $set: {
                    title: value.title, 
                    description: value.description 
                }
            });
        } else {
            // todo: validate
            // todo

            Incidents.insert({
                title: value.title,
                description: value.description
            });
        }

        this.redirectToList();
    }

    cancel(): void {
        this.redirectToList();
    }

    delete(): void {
        if (!this.incident) {
            return;
        }

        Incidents.remove(this.incident._id);

        this.redirectToList();
    }

    private redirectToList(): void {
        this._router.navigate(['..'], { relativeTo: this._route });
    }
}

export default IncidentDetailComponent;