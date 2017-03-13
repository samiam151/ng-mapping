import { Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { ListComponent } from './list/list.component';
import { BusinessDetailComponent } from './business-detail/business-detail.component';

export const appRoutes: Routes = [
    // { path: 'map', component: MapComponent },
    // { path: 'business/:name', component: BusinessDetailComponent },
    { path: 'businesses', component: ListComponent },
    // { path: '', redirectTo: 'map', pathMatch: 'full' }
    { path: '', component: MapComponent }
]