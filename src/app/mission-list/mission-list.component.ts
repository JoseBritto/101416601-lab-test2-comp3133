import {Component, Input} from '@angular/core';
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
  public missions: Mission[] = [];
  @Input() year: string = '';

  constructor(private apiClientService: ApiClientService, private router: Router) {  }

  ngOnInit() {
    this.getMissions();
  }

  ngOnChanges(){
    if(this.year == null || this.year.toString().trim() === '') {
      this.getMissions();
    } else {
      this.getFilteredMissions();
    }
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

  getFilteredMissions() {
    this.apiClientService.getMissionInYear(this.year).subscribe({
      next: result => {
        this.missions = result;
      }
    })
  }



}
