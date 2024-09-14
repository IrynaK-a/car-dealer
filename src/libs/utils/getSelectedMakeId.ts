'use client';
import { VehicleMakesInfo } from '@/shared/types';

export const getSelectedMakeId = (
  makeName: string,
  items: VehicleMakesInfo[],
) => {
  const makeInfo = items.find(item => item.MakeName === makeName);

  return makeInfo?.MakeId ?? '';
};
