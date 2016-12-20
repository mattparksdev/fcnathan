import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from "@angular/material";

import Routes from './routes';

import Components from './component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        RouterModule.forChild(Routes),
        MaterialModule.forRoot()
    ],
    exports: [
        RouterModule
    ],
    declarations: [
        ...Components
    ]
})
export default class IncidentsModule { }