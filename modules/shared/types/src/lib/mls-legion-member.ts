import { Expose } from 'class-transformer';
import { IsEnum } from 'class-validator';
import { MlsGroup } from './mls-group';
import { MlsJob } from './mls-job';
import { MlsJobClass } from './mls-job-class';
import { MlsMemberBonusType } from './mls-member-bonus-type';

export class MlsLegionMember {
  @Expose()
  @IsEnum(MlsJob)
  public job?: MlsJob;

  @Expose()
  @IsEnum(MlsJobClass)
  public jobClass?: MlsJobClass;
  
  @Expose()
  @IsEnum(MlsGroup)
  public group?: MlsGroup;
  
  @Expose()
  @IsEnum(MlsMemberBonusType)
  public memberBonus?: MlsMemberBonusType; 

  constructor(
    job?: MlsJob, 
    jobClass?: MlsJobClass,
    group?: MlsGroup,
    memberBonus?: MlsMemberBonusType
  ) {
    this.job = job; 
    this.jobClass = jobClass; 
    this.group = group; 
    this.memberBonus = memberBonus; 
  } 
}