import { Component } from '@angular/core';
import {MissionListComponent} from "../mission-list/mission-list.component";
import {MissionFilterComponent} from "../mission-filter/mission-filter.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MissionListComponent, MissionFilterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public year: string = "";

  storeYear(year: string) {
    this.year = year;
  }
}
