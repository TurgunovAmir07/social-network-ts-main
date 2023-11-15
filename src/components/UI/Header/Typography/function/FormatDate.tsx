import React from "react";

type FormatDateFunction = (date: Date) => string;

export const FormatDate: FormatDateFunction = (date) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString();

  return `${day}.${month}.${year}`;
};

export default FormatDate;