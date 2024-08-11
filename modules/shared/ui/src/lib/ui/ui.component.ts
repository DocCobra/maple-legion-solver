import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MlsButtonComponent, MlsCharListComponent, MlsLegionGridComponent } from '@maple-legion-solver/ui'; 

@Component({
  selector: 'lib-ui',
  standalone: true,
  imports: [
    CommonModule,
    MlsLegionGridComponent,
    MlsButtonComponent,
    MlsCharListComponent
  ],
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.css',
})
export class UiComponent {}
