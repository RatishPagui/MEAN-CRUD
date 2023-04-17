import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Crudcomp2Component } from './crudcomp2/crudcomp2.component';
import { Crudcomp3Component } from './crudcomp3/crudcomp3.component';
import { Crudcomp4Component } from './crudcomp4/crudcomp4.component';
import { Crudcomp5Component } from './crudcomp5/crudcomp5.component';
import { CrudeupdatecomComponent } from './crudeupdatecom/crudeupdatecom.component';
import { MongodataComponent } from './mongodata/mongodata.component';
import { Routecomp1Component } from './routecomp1/routecomp1.component';
import { Routecomp2Component } from './routecomp2/routecomp2.component';
import { Routecomp3Component } from './routecomp3/routecomp3.component';
import { UpdFormComponent } from './upd-form/upd-form.component';
import { UpdtFormComponent } from './updt-form/updt-form.component';

const routes: Routes = [
  {path:"form",component:UpdFormComponent},
  {path:"updateform/:id",component:UpdtFormComponent},
  {path:"display",component:MongodataComponent},
  {path:"doctormodule",component:Routecomp1Component},
  {path:"patientmodule",component:Routecomp2Component},
  {path:"doctordetails/:id",component:Routecomp3Component},
  {path:"getdatamodule",component:Crudcomp2Component},
  {path:"postdatamodule",component:Crudcomp3Component},
  {path:"updatedatamodule",component:Crudcomp4Component},
  {path:"deletedatamodule",component:Crudcomp5Component},
  {path:"updateform1/:id",component:CrudeupdatecomComponent},
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
