import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-mission-filter',
  standalone: true,
  imports: [FormsModule, MatButton],
  templateUrl: './mission-filter.component.html',
  styleUrl: './mission-filter.component.css'
})
export class MissionFilterComponent {
  @Output() year = new EventEmitter<string>();
  inputData: string = '';

  submitData() {
    this.year.emit(this.inputData);
  }
}
