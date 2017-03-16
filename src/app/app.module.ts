// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AgmCoreModule } from 'angular2-google-maps/core';

// Components
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';

// Services
import { DataService } from './services/data-service.service';
import { FilterService } from './services/filter.service';
import { BusinessDetailActivator } from './business-detail/business-detail-activator.service';

// Pipes
import { TruncatePipe } from './pipes/truncate';

// Routes
import { appRoutes } from './routes';
import { ListComponent } from './list/list.component';
import { NavComponent } from './nav/nav.component';
import { BusinessDetailComponent } from './business-detail/business-detail.component';
import { ListpanelComponent } from './list/listpanel/listpanel.component';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    ListComponent,
    NavComponent,
    BusinessDetailComponent,
    ListpanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCLN3lUeulNKyDyoI0YavaSZcO1Tl4QGI4'
    })
  ],
  providers: [
    DataService,
    FilterService,
    BusinessDetailActivator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
