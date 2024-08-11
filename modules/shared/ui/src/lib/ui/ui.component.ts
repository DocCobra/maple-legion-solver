import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegionGridComponent } from "../../legion-grid/legion-grid.component";

@Component({
  selector: 'lib-ui',
  standalone: true,
  imports: [CommonModule, LegionGridComponent],
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.css',
})
export class UiComponent {}
