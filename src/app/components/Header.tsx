"use client";

import { useEffect, useState } from "react";
import { Icon } from "./ui/Icon";
import { HeaderNavMenu } from "./HeaderNavMenu";
import { HeaderNavMenuMobile } from "./HeaderNavMenuMobile";
import { MainLogo } from "./MainLogo";

export const Header: React.FC = () => {
  const [isShowMenu, setIsShowMenu] = useState(false);

    useEffect(() => {
      if (isShowMenu) {
        document.body.classList.add("overflow-hidden");
      } else {
        document.body.classList.remove("overflow-hidden");
      }
      return () => document.body.classList.remove("overflow-hidden");
    }, [isShowMenu]);

  return (
    <>
      <header className="sticky top-0 z-50 flex justify-between items-center bg-bg/50 backdrop-blur-md w-full">
        <div className="container flex justify-between items-center flex-row mx-auto py-5">
          <MainLogo className="md:block hidden" />
          <p className="md:hidden block text-lg font-bold leading-5 text-textDark">
            &lt;SK&gt;
          </p>
          <button
            type="button"
            onClick={() => setIsShowMenu(!isShowMenu)}
            className="flex justify-center items-center md:hidden"
          >
            <Icon
              id="icon-mobile_menu"
              width={24}
              height={24}
              className="text-textDark"
            />
          </button>
          <div
            className={`absolute z-30 left-0 w-full transition-all duration-500 ease-in-out
            ${isShowMenu ? "top-0" : "-top-[600px]"}
            `}
          >
            <HeaderNavMenuMobile onClose={() => setIsShowMenu(false)} />
          </div>
          <HeaderNavMenu />
        </div>
      </header>
      {isShowMenu && (
        <div
          className={`fixed inset-0 z-20 w-lvw h-lvh transition-all duration-1000 ease-in-out bg-bg/50 backdrop-blur-md
        `}
        />
      )}
    </>
  );
}
