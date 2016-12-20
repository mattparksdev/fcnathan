import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import BaseComponent from './base';

import template from './login.html';
 
@Component({ selector: 'login', template })
class LoginComponent 
    extends BaseComponent
    implements OnInit
{
    private _zone: NgZone;
    private _router: Router;
    private _formBuilder: FormBuilder;

    public errorText: string;
    public loginForm: FormGroup;

    constructor(
        router: Router, 
        zone: NgZone, 
        formBuilder: FormBuilder) 
    {
        super();
        
        this._zone = zone;
        this._router = router;
        this._formBuilder = formBuilder;
    }

    ngOnInit(): void {
        this.errorText = '';

        this.loginForm = this._formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required]
        });
    }

    login() {
        if (!this.loginForm.valid) {
            return;
        }
        
        Meteor.loginWithPassword(
            this.loginForm.value.email, 
            this.loginForm.value.password, 
            (err) => {
                if (err) {
                    this._zone.run(
                        () => this.errorText = err);
                } else {
                    this._router.navigate(['/']);
                }
            });
    }
}

export default LoginComponent;