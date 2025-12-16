import { PropsWithChildren } from "react";

import Header from "components/templates/header/header";
import LayoutWrapper from "components/templates/layoutWrapper/layoutWrapper";

export default function PanelLayout({
  children,
}: PropsWithChildren) {
  return (
    <>
      <Header />
      <LayoutWrapper>
        {children}
      </LayoutWrapper>
    </>
  );
}
