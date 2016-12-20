import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import BaseComponent from '../../../component/base';

import User from '../../../../../../both/model/user';
import Users from '../../../../../../both/collection/user';

import template from './user-detail.html';

@Component({ selector: 'user-detail', template })
class UserDetailComponent
    extends BaseComponent
    implements OnInit
{
    private _route: ActivatedRoute;
    private _router: Router;
    private _userId: string;
    private _formBuilder: FormBuilder;

    public user: User;
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
            email: ['', Validators.required],
            username: ['', Validators.required],
            password: ['']
        });

        this.track(
            this._route.params
                .map(params => params['userId'])
                .subscribe(userId => {
                    this._userId = userId;
                    
                    if (this._userId) {
                        this.user = Users.findOne(userId);

                        // todo: check if not found
                    }

                    if (this.user) {
                        this.form.setValue({
                            email: this.user.emails[0].address,
                            username: this.user.username,
                            password: ''
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

        if (this.user) {
            // todo: validate email
            // todo: validate username

            // todo

            Users.update(this.user._id, {
                $set: {
                    'email.0.address': value.email,
                    username: value.username
                }
            });
        } else {
            // todo: validate email
            // todo: validate username
            // todo: validate password

            // todo: create with meteor method
        }

        this.redirectToList();
    }

    cancel(): void {
        this.redirectToList();
    }

    delete(): void {
        if (!this.user) {
            return;
        }

        Users.remove(this.user._id);

        this.redirectToList();
    }

    private redirectToList(): void {
        this._router.navigate(['..'], { relativeTo: this._route });
    }
}

export default UserDetailComponent;