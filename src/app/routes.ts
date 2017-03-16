import { Routes } from '@angular/router';
import { MapComponent } from './map/map.component';
import { ListComponent } from './list/list.component';
import { BusinessDetailComponent } from './business-detail/business-detail.component';
import { BusinessDetailActivator } from './business-detail/business-detail-activator.service';

export const appRoutes: Routes = [
    { path: 'businesses/:id', component: BusinessDetailComponent, canActivate: [BusinessDetailActivator] },
    { path: 'businesses', component: ListComponent },
    { path: '', component: MapComponent }
]