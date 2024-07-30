export interface IBattle {
    isAttackerVictorious: boolean;
    damageToDefender: number;
    battle: {
      id: string;
      attackerId: string;
      defenderId: string;
      result: string;
      createdAt: string;
    };
  }
  