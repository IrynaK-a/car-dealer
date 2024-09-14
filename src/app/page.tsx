import { Filters } from '@/components';
import { IVehicleTypeInfo } from '@/shared/interfaces';
import { getVehicleMakesInfo } from '@/libs/utils';

export default async function FilterPage() {
  const url =
    process.env.VEHICLES_API_BASE_URL +
    '/GetMakesForVehicleType/car?format=json';

  const response = await fetch(url);

  const vehiclesInfo: IVehicleTypeInfo = await response.json();

  const vehicleMakesInfo = getVehicleMakesInfo(vehiclesInfo.Results);

  return (
    <main className="p-3 md:p-20">
      <h1 className="text-2xl md:text-4xl font-bold mb-6">Vehicle Filter</h1>

      <Filters
        dropdownName="Car brand"
        items={vehicleMakesInfo}
      />
    </main>
  );
}
