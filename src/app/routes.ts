import { Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { ListComponent } from './list/list.component';

export const appRoutes: Routes = [
    { path: 'map', component: MapComponent },
    { path: 'businesses', component: ListComponent },
    { path: '', redirectTo: 'map', pathMatch: 'full' }
]