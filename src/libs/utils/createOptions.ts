import { ISelectOption } from '@/shared/interfaces';

export const createOptions = (items: string[]): ISelectOption[] => {
  return items.reduce((acc, curr) => {
    acc.push({
      value: curr.toLowerCase(),
      label: curr,
    });

    return acc;
  }, [] as ISelectOption[]);
};
