import { Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { ListComponent } from './list/list.component';
import { BusinessDetailComponent } from './business-detail/business-detail.component';

export const appRoutes: Routes = [
    { path: 'businesses', component: ListComponent },
    { path: '', component: MapComponent }
]