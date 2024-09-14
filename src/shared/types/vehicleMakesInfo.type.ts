import { IVehicleTypeInfoResult } from '../interfaces';

export type VehicleMakesInfo = Pick<
  IVehicleTypeInfoResult,
  'MakeId' | 'MakeName'
>;
