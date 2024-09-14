'use client';

import Select, { StylesConfig, SingleValue } from 'react-select';
import { useMemo, useState } from 'react';
import Link from 'next/link';

import {
  getYearsFrom2015ToCurrent,
  createOptions,
  sortItems,
  getSelectedMakeId,
} from '@/libs/utils';
import { ISelectOption } from '@/shared/interfaces';
import { VehicleMakesInfo } from '@/shared/types';

type Props = {
  dropdownName: string;
  items: VehicleMakesInfo[];
};

const customStyles: StylesConfig<ISelectOption> = {
  control: provided => ({
    ...provided,
    width: '300px',
    maxWidth: '100%',
  }),
  menu: provided => ({
    ...provided,
    width: '300px',
    maxWidth: '100%',
  }),
};

export const Filters: React.FC<Props> = ({ dropdownName, items }) => {
  const [selectedOption, setSelectedOption] =
    useState<SingleValue<ISelectOption>>(null);
  const [selectedYear, setSelectedYear] =
    useState<SingleValue<ISelectOption>>(null);

  const isEnabled = !!selectedOption && !!selectedYear;

  const vehiclesMakesNames = useMemo(
    () => items.map(item => item.MakeName),
    [items],
  );
  const options = useMemo(
    () => createOptions(sortItems(vehiclesMakesNames)),
    [vehiclesMakesNames],
  );
  const years = useMemo(() => createOptions(getYearsFrom2015ToCurrent()), []);

  const getPath = () => {
    if (!isEnabled) {
      return '';
    }

    const makeId = getSelectedMakeId(selectedOption.label, items);

    if (!makeId) {
      return '';
    }

    return `/result/${makeId}/${selectedYear.value}`;
  };

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col md:flex-row gap-5">
        <div className="flex flex-col gap-2">
          <label
            htmlFor={dropdownName}
            className="text-xl font-semibold"
          >
            {dropdownName}:{' '}
          </label>
          <Select
            id={dropdownName}
            options={options}
            styles={customStyles}
            maxMenuHeight={300}
            isMulti={false}
            isClearable
            onChange={setSelectedOption}
            closeMenuOnSelect
          />
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="years"
            className="text-xl font-semibold"
          >
            Years:
          </label>
          <Select
            id="years"
            options={years}
            styles={customStyles}
            maxMenuHeight={300}
            isClearable
            isMulti={false}
            onChange={setSelectedYear}
            closeMenuOnSelect
          />
        </div>
      </div>

      <Link
        href={getPath()}
        className="w-full max-w-[300px] md:max-w-40"
      >
        <button
          className={`w-full p-2 mt-4 text-white font-bold rounded ${
            isEnabled ? 'bg-blue-500' : 'bg-gray-400 cursor-not-allowed'
          } ${isEnabled ? 'hover:bg-blue-700' : ''}`}
          disabled={!isEnabled}
        >
          Next
        </button>
      </Link>
    </div>
  );
};
