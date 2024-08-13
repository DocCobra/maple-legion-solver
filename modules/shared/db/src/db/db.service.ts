import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MlsLegionMember } from '@maple-legion-solver/types';
import { plainToInstance } from 'class-transformer';
import { validateSync, ValidationError } from 'class-validator';
import { first, map, ReplaySubject, tap } from 'rxjs';

@Injectable()
export class DBService {
  static readonly JSON_DB_URL: string = 'assets/db/'; 
  static readonly JSON_DB_ENTRIES: string[] = [
    'db-job.json',
    //'db-member-bonus.json'
  ]

  public legionMembers?: ReplaySubject<MlsLegionMember[]> = new ReplaySubject<MlsLegionMember[]>();

  constructor(private httpClient: HttpClient) {
    this.init(); 
  }

  private init(): void {
    const jsonDB = this.httpClient.get<MlsLegionMember[]>(
      DBService.JSON_DB_URL + DBService.JSON_DB_ENTRIES
    ).pipe(
      first(),
      map(result => plainToInstance(MlsLegionMember, result, { excludeExtraneousValues: true })),
      tap(result => result.forEach(
        item => {
          const validationErrors: ValidationError[] = validateSync(item); 
          if (validationErrors.length === 0) return; 

          throw new Error(validationErrors.find(i => i)?.toString()); 
        }
      ))
    ).subscribe(result => {
      this.legionMembers?.next(result); 
    }) ; 

    
  }

  
}
