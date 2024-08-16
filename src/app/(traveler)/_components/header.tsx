import SiteLogo from "@/components/logo";
import { Button } from "@/components/ui/button";
import WrapperContainer from "@/components/wrapper-container";
import React from "react";

const TravelerHeader = () => {
  return (
    <div className="pt-4 pb-4 bg-blue-100">
      <WrapperContainer>
        <div className="flex items-center justify-between bg-red-300">
          <SiteLogo />
          <Button>Click Me</Button>
        </div>
      </WrapperContainer>
    </div>
  );
};

export default TravelerHeader;
