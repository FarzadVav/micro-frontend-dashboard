"use client";

import {
  ButtonHTMLAttributes,
  Fragment,
  ReactNode,
  cloneElement,
  isValidElement,
  use,
} from "react";

import { PaginationContext } from "./paginationContext";

export type PaginationCountsPropsT = ButtonHTMLAttributes<HTMLButtonElement> & {
  progressElement?: ReactNode;
};

export function PaginationCounts({ children, onClick, progressElement, ...p }: PaginationCountsPropsT) {
  const { pagesLength, page, setPage } = use(PaginationContext);

  const renderElement = (element: ReactNode, isActive: boolean, isSkipped: boolean, inProgress: boolean, key: string) => {
    if (!element) return null;

    if (isValidElement(element)) {
      return cloneElement(
        element,
        {
          key: element.key ?? key,
          "data-state": isActive,
          "data-skipped": isSkipped,
          "data-in-progress": inProgress,
        } as Record<string, unknown>,
      );
    }

    return (
      <div key={key} data-state={isActive} data-skipped={isSkipped} data-in-progress={inProgress}>
        {element}
      </div>
    );
  };

  return Array.from({ length: pagesLength }).map((_, index) => {
    const currentIndex = index + 1;
    const isActive = currentIndex === page;
    const isSkipped = (currentIndex === page) || (currentIndex < page);
    const inProgress = currentIndex < page;

    return (
      <Fragment key={currentIndex}>
        <button
          data-state={isActive}
          data-skipped={isSkipped}
          onClick={(ev) => {
            onClick?.(ev);
            setPage(currentIndex);
          }}
          {...p}>
          {children || currentIndex}
        </button>

        {index < pagesLength - 1 && (
          renderElement(
            progressElement,
            isActive,
            isSkipped,
            inProgress,
            `next-${currentIndex}`
          )
        )}
      </Fragment>
    );
  });
}
