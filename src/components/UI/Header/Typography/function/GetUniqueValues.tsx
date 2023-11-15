import React from "react";

type GetUniqueValuesFunction<T> = (arr: T[]) => T[];

export const GetUniqueValues: GetUniqueValuesFunction<any> = (arr) => {
  return Array.from(new Set(arr));
};

export default GetUniqueValues;