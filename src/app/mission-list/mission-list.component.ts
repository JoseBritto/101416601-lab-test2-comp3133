import { Component } from '@angular/core';
import {ApiClientService} from "../services/api-client.service";
import {Mission} from "../models/mission";
import {  MatCardModule } from "@angular/material/card";
import {Router} from "@angular/router";

@Component({
  selector: 'app-mission-list',
  standalone: true,
  imports: [
    MatCardModule
  ],
  templateUrl: './mission-list.component.html',
  styleUrl: './mission-list.component.css'
})
export class MissionListComponent {
  public missions: Mission[] = []

  constructor(private apiClientService: ApiClientService, private router: Router) {  }

  ngOnInit() {
    this.getMissions();
  }

  getMissions() {
    this.apiClientService.getMissions().subscribe({
      next: result => {
        this.missions = result;
      },
      error: error => {
        console.log('Error Occurred:', error);
      }
    })
  }

  goToMission(mission:  number) {
    this.router.navigate(['/mission/' + mission])
  }


}
