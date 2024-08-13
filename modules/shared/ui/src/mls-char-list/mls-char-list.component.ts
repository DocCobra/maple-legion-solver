import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { DBService } from '@maple-legion-solver/db';
import { MlsLegionMember } from '@maple-legion-solver/types';
import { Subject, takeUntil } from 'rxjs';
import { MlsButtonComponent } from '../mls-button/mls-button.component';
import { MlsCardComponent } from '../mls-card/mls-card.component';
import { MlsCharListItemComponent } from '../mls-char-list-item/mls-char-list-item.component';

@Component({
  selector: 'mls-char-list',
  standalone: true,
  imports: [
    CommonModule,
    MlsButtonComponent,
    MlsCharListItemComponent,
    MlsCardComponent
  ],
  templateUrl: './mls-char-list.component.html',
  styleUrl: './mls-char-list.component.scss',
})
export class MlsCharListComponent implements OnInit, OnDestroy {
  legionMembers: MlsLegionMember[] = []; 

  private _destroy$: Subject<void> = new Subject<void>(); 

  constructor(private dbService: DBService) { }

  ngOnInit(): void {
    this.dbService.legionMembers?.pipe(
      takeUntil(this._destroy$)
    ).subscribe(legionMembers => 
      this.legionMembers = legionMembers
    ); 
  }  

  ngOnDestroy(): void {
    this._destroy$.next(); 
  }
}
