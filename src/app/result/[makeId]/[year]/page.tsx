import { getYearsFrom2015ToCurrent } from '@/libs/utils';
import { IVehicleTypeInfo, IVehicleModel } from '@/shared/interfaces';
import Link from 'next/link';

export async function generateStaticParams() {
  const url =
    process.env.VEHICLES_API_BASE_URL +
    '/GetMakesForVehicleType/car?format=json';

  const response = await fetch(url);

  const vehiclesInfo: IVehicleTypeInfo = await response.json();

  const vehicleMakesIds = Array.from(
    new Set(vehiclesInfo.Results.map(el => el.MakeId)),
  );
  const years = getYearsFrom2015ToCurrent();

  const params = vehicleMakesIds.flatMap(makeId =>
    years.map(year => ({
      year,
      makeId: String(makeId),
    })),
  );

  return params;
}

async function getVehicleModels(params: { year: string; makeId: string }) {
  const { makeId, year } = params;

  const url =
    process.env.VEHICLES_API_BASE_URL +
    `/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`;

  const res = await fetch(url);
  const data: IVehicleModel = await res.json();

  return data.Results;
}

export default async function ResultPage({
  params,
}: {
  params: {
    makeId: string;
    year: string;
  };
}) {
  const vehicleModels = await getVehicleModels(params);
  const makeName = vehicleModels[0]?.Make_Name;
  const year = params.year;

  return (
    <main className="p-3 md:p-20 w-max max-w-[100vw]">
      <h1 className="text-2xl md:text-4xl font-bold mb-10 w-full text-wrap">
        {!!vehicleModels.length
          ? `${makeName} models ${year} year:`
          : 'No models found'}
      </h1>

      {!!vehicleModels.length && (
        <table className="w-full text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-10">
          <thead className="text-sm md:text-lg text-gray-700 md:uppercase bg-blue-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th
                scope="col"
                className="p-2 md:px-6 md:py-3"
              >
                Model id
              </th>
              <th
                scope="col"
                className="p-2 md:px-6 md:py-3"
              >
                Model name
              </th>
            </tr>
          </thead>

          <tbody className="text-sm md:text-base">
            {vehicleModels.map(el => (
              <tr
                key={el.Model_ID}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th
                  scope="row"
                  className="p-2 md:px-6 md:py-4 font-medium text-gray-900 md:whitespace-nowrap dark:text-white"
                >
                  {el.Model_ID}
                </th>
                <td className="p-2 md:px-6 md:py-4 text-wrap">
                  {el.Model_Name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <Link
        href="/"
        className="w-full max-w-[300px] md:max-w-40 flex justify-center p-2 mt-4 text-white font-bold rounded bg-blue-500 hover:bg-blue-700"
      >
        Go back
      </Link>
    </main>
  );
}
