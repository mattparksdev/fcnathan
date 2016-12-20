import { Component, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

class BaseComponent
    implements OnDestroy
{
    private _subscriptions: Subscription[];

    constructor() {
        this._subscriptions = [];
    }

    ngOnDestroy(): void {
        this._subscriptions.forEach(x => x.unsubscribe());

        this._subscriptions.length = 0;
    }

    protected track(subscription: Subscription) : void
    {
        var index = this._subscriptions.indexOf(subscription);

        if (index !== -1) {
            return;
        }

        this._subscriptions.push(subscription);
    }

    protected untrack(subscription: Subscription) : void
    {
        var index = this._subscriptions.indexOf(subscription);

        if (index === -1) {
            return;
        }

        this._subscriptions.splice(index, 1);
    }
}

export default BaseComponent;