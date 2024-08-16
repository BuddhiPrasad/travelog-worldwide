import Image from "next/image";
import React from "react";

import userimage from "@/../public/user image.png";

const UserAvater = () => {
  return (
    <div>
      <Image src={userimage} alt="userimage" width={38} />
    </div>
  );
};

export default UserAvater;
