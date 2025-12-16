"use client";

import { createContext, Dispatch, SetStateAction } from "react";

import { PaginationPagesT } from "./paginationTypes";

export type PaginationContextT = {
  pages?: PaginationPagesT[];
  pagesLength: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  nextPage: () => void;
  prevPage: () => void;
};

export const PaginationContext = createContext<PaginationContextT>(
  {} as PaginationContextT,
);
