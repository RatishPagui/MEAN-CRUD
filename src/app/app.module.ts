import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APIdataComponent } from './apidata/apidata.component';
import { MongodataComponent } from './mongodata/mongodata.component';
import { UpdFormComponent } from './upd-form/upd-form.component';
import { UpdtFormComponent } from './updt-form/updt-form.component';
import { RouteCompComponent } from './route-comp/route-comp.component';
import { Routecomp1Component } from './routecomp1/routecomp1.component';
import { Routecomp2Component } from './routecomp2/routecomp2.component';
import { Routecomp3Component } from './routecomp3/routecomp3.component';
import { CRUDcomp1Component } from './crudcomp1/crudcomp1.component';
import { Crudcomp2Component } from './crudcomp2/crudcomp2.component';
import { Crudcomp3Component } from './crudcomp3/crudcomp3.component';
import { Crudcomp4Component } from './crudcomp4/crudcomp4.component';
import { Crudcomp5Component } from './crudcomp5/crudcomp5.component';
import { CrudeupdatecomComponent } from './crudeupdatecom/crudeupdatecom.component';



@NgModule({
  declarations: [
    AppComponent,
    APIdataComponent,
    MongodataComponent,
    UpdFormComponent,
    UpdtFormComponent,
    RouteCompComponent,
    Routecomp1Component,
    Routecomp2Component,
    Routecomp3Component,
    CRUDcomp1Component,
    Crudcomp2Component,
    Crudcomp3Component,
    Crudcomp4Component,
    Crudcomp5Component,
    CrudeupdatecomComponent,
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
