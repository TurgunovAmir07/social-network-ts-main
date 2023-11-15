import React from "react"

type FilterStringsFunction = <T>(arr: T[]) => string[];

export const FilterStrings: FilterStringsFunction = (arr) => {
  return arr.filter((item) => typeof item === "string") as string[];
};

export default FilterStrings;
