import 'angular2-meteor-polyfills';
 
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
 
import AppModule from './imports/app';
 
const platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);