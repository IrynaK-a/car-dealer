export const sortItems = (items: string[]): string[] =>
  [...items].sort((a, b) => a.localeCompare(b));
