import { PaginationPages } from "./paginationPages";
import { PaginationCounts } from "./paginationCounts";
import { PaginationNextBtn } from "./paginationNextBtn";
import { PaginationPrevBtn } from "./paginationPrevBtn";
import { PaginationStateRoot } from "./paginationStateRoot";
import { PaginationSearchParamsRoot } from "./paginationSearchParamsRoot";

const baseComponents = {
  Pages: PaginationPages,
  Counts: PaginationCounts,
  NextBtn: PaginationNextBtn,
  PrevBtn: PaginationPrevBtn,
};

export const PaginationWithState = Object.assign(PaginationStateRoot, baseComponents);

export const PaginationWithSearchParams = Object.assign(
  PaginationSearchParamsRoot,
  baseComponents,
);
