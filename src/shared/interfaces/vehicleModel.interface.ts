import { IVehicleModelInfo } from './vehicleModelInfo.interface';

export interface IVehicleModel {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: IVehicleModelInfo[];
}
