import { HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DBService } from '@maple-legion-solver/db';
import { MlsButtonComponent, MlsCharListComponent, MlsLegionGridComponent } from '@maple-legion-solver/ui';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    MlsButtonComponent,
    MlsLegionGridComponent,
    MlsCharListComponent
  ],
  providers: [
    DBService
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'maple-legion-solver';

  constructor(private dbService: DBService) { }
}
