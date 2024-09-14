import { IVehicleTypeInfoResult } from './vehicleTypeInfoResult.interface';

export interface IVehicleTypeInfo {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: IVehicleTypeInfoResult[];
}
