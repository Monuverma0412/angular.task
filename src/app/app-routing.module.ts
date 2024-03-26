import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { TrafficLightComponent } from './traffic-light/traffic-light.component';
import { FirstComponent } from './first/first.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: "table", component: TableComponent },
  { path: 'contact', component: ContactComponent },
  { path: "traffic-light", component: TrafficLightComponent },
  { path:"first",component:FirstComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
