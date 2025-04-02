import { Component } from '@angular/core';
import {Mission} from "../models/mission";
import {ActivatedRoute} from "@angular/router";
import {ApiClientService} from "../services/api-client.service";
import {MatCardModule} from "@angular/material/card";
import {NgIf, NgOptimizedImage} from "@angular/common";
import {MatAnchor} from "@angular/material/button";

@Component({
  selector: 'app-mission-details',
  standalone: true,
  imports: [MatCardModule, NgOptimizedImage, NgIf, MatAnchor],
  templateUrl: './mission-details.component.html',
  styleUrl: './mission-details.component.css'
})
export class MissionDetailsComponent {
  public missionId: number = 0;

  public mission!: Mission;

  constructor(private route: ActivatedRoute, private apiClientService: ApiClientService) {
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = params.get('id')!;
      this.missionId = Number(id);
      this.apiClientService.getMission(this.missionId).subscribe({
        next: result => {
          this.mission = result;
        },
        error: error => {
          console.log('Error Occurred:', error);
        }
      })
    });
  }


}
