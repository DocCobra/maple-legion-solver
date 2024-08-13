import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'mls-char-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mls-char-list-item.component.html',
  styleUrl: './mls-char-list-item.component.scss',
})
export class MlsCharListItemComponent {
  @Input() job: any = ''; 
  @Input() jobClass: any = ''; 
  @Input() group: any = ''; 
  @Input() memberBonus: any = ''; 

}
