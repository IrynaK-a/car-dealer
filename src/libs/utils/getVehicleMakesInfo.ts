import { IVehicleTypeInfoResult } from '@/shared/interfaces';
import { VehicleMakesInfo } from '@/shared/types';

export const getVehicleMakesInfo = (
  items: IVehicleTypeInfoResult[],
): VehicleMakesInfo[] => {
  return items.map(item => ({
    MakeId: item.MakeId,
    MakeName: item.MakeName,
  }));
};
