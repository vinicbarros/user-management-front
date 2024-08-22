import { NestedKeyOf } from "../types/TableSortType";

export const getValue = <T extends object, K extends NestedKeyOf<T>>(
  obj: T,
  key: K
): any => {
  return key.split(".").reduce((acc: any, part) => {
    if (acc && typeof acc === "object") {
      return acc[part as keyof typeof acc];
    }
    return undefined;
  }, obj);
};
