import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { MeteorObservable } from 'meteor-rxjs';

import User from '../../../../../../both/model/user';
import Users from '../../../../../../both/collection/user';

import BaseComponent from '../../../component/base';

import template from './user-list.html';
 
@Component({ selector: 'user-list', template })
class UserListComponent
    extends BaseComponent
    implements OnInit
{
    public users: Observable<User[]>;

    constructor() {
        super();
    }

    ngOnInit(): void {
        this.users = Users.find({}).zone();

        this.track(
            MeteorObservable
                .subscribe('users')
                .subscribe());
    }
}

export default UserListComponent;