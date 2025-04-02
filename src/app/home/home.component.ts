import { Component } from '@angular/core';
import {MissionListComponent} from "../mission-list/mission-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MissionListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
