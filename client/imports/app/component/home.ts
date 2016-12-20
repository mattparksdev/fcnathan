import { Component } from '@angular/core';

import BaseComponent from './base';

import template from './home.html';
 
@Component({ selector: 'home', template })
class HomeComponent
    extends BaseComponent
{
    constructor() {
        super();
    }
}

export default HomeComponent;