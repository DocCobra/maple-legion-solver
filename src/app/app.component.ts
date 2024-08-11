import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MlsButtonComponent, MlsCharListComponent, MlsLegionGridComponent } from '@maple-legion-solver/ui';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    MlsButtonComponent,
    MlsLegionGridComponent,
    MlsCharListComponent
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'maple-legion-solver';

  ngOnInit(): void {

  }
}
