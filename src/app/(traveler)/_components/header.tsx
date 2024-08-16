import SiteLogo from "@/components/logo";
import { Button } from "@/components/ui/button";
import UserAvater from "@/components/user-avater";
import WrapperContainer from "@/components/wrapper-container";
import React from "react";

import { FaCaretDown } from "react-icons/fa";

const TravelerHeader = () => {
  return (
    <div className="pt-4 pb-4 border border-b sticky top-0 bg-secondary ">
      <WrapperContainer>
        <div className="flex items-center justify-between">
          <SiteLogo />
          <div className="flex gap-x-2 items-center">
            <UserAvater />
            <FaCaretDown />
          </div>
        </div>
      </WrapperContainer>
    </div>
  );
};

export default TravelerHeader;
