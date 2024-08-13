import { MlsMemberBonusType } from "./mls-member-bonus-type";
import { MlsMemberTier } from "./mls-member-tier";

export interface MlsMemberBonus {
  type: MlsMemberBonusType;
  amount: {
    [key in MlsMemberTier]: number;
  }
};