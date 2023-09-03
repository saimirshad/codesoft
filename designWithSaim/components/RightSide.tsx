import React from "react";

const RightSide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-end gap-6 text-textLight">
      <a href="mailto:bakarspvt@gmail.com">
        <p className="text-sm w-72 text-textGreen rotate-90 tracking-wide">
          bakarspvt@gmail.com
        </p>
      </a>
      <span className="w-[2px] h-32 bg-textDark inline-flex"></span>
    </div>
  );
};

export default RightSide;
