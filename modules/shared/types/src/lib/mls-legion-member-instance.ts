import { MlsGroup } from './mls-group';
import { MlsJob } from './mls-job';
import { MlsJobClass } from './mls-job-class';
import { MlsLegionMember } from './mls-legion-member';
import { MlsMemberBonusType } from './mls-member-bonus-type';
import { MlsMemberTier } from './mls-member-tier';

export class MlsLegionMemberInstance extends MlsLegionMember {
  private _level?: number; 
  private _tier?: MlsMemberTier; 

  public name?: string; 

  constructor(
    job?: MlsJob, 
    jobClass?: MlsJobClass,
    group?: MlsGroup,
    memberBonus?: MlsMemberBonusType,

    name?: string, 
    level?: number,
    tier?: MlsMemberTier
  ) {
    super(job, jobClass, group, memberBonus); 
    
    this.name = name; 
    this.level = level;
    this.tier = tier; 
  } 

  public get level(): number | undefined {
    return this._level; 
  }

  public set level(value?: number | undefined) {
    if (!value) return; 
    if (value < 60) throw new Error(`Legion member level is too low (${value}).`); 
    if (value > 300) throw new Error(`Legion member level is too high (${value}).`); 
    
    this._level = value;
    this.tier = this.getLegionMemberTier(value); 
  }

  public get tier(): MlsMemberTier | undefined {
    return this._tier; 
  }

  public set tier(value?: MlsMemberTier | undefined) {
    this._tier = value; 
  }

  private getLegionMemberTier(level: number): MlsMemberTier {
    if (level >= 250)
      return MlsMemberTier.SSS; 
    else if (level >= 200)
      return MlsMemberTier.SS; 
    else if (level >= 140) 
      return MlsMemberTier.S; 
    else if (level >= 100)
      return MlsMemberTier.A; 
    else if (level >= 60)
      return MlsMemberTier.B; 
    else 
      throw new Error(`Legion member level is too low (${level}).`); 
  }
}