import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {MissionDetailsComponent} from "./mission-details/mission-details.component";
import {HomeComponent} from "./home/home.component";

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'mission/:id', component: MissionDetailsComponent}
];
