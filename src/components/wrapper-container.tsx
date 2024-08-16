import React from "react";

import { ReactNode } from "react";

const WrapperContainer = ({ children }: { children: ReactNode }) => {
  return <div className="container mx-auto">{children}</div>;
};

export default WrapperContainer;
