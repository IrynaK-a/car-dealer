export const getYearsFrom2015ToCurrent = (): string[] => {
  const currentYear = new Date().getFullYear();
  const years: string[] = [];

  for (let year = 2015; year <= currentYear; year++) {
    years.push(String(year));
  }

  return years;
};
