import React, { useState } from "react";
import Logo from "../Logo";
import { HeaderContainer, SearchContainer, HamburgerContainer } from "./style";
import searchIcon from "src/assets/svg/searchIconBlack.svg";
import hamburgerIcon from "src/assets/svg/hamburgerIcon.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import Sidebar from "../Sidebar";
import { useDesktop } from "src/functions/handleScreen";

const Header: React.FC = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const isDesktop = useDesktop();
  const router = useRouter();
  return (
    <HeaderContainer>
      {!isDesktop ? (
        <Logo
          onClick={() => {
            router.push("/?page=1");
          }}
        />
      ) : (
        <div></div>
      )}
      <SearchContainer>
        <Image alt="search" src={searchIcon} />
        {!isDesktop && (
          <HamburgerContainer>
            <Image
              alt="hamburger"
              src={hamburgerIcon}
              onClick={() => {
                setShowSidebar((prev) => !prev);
              }}
            />
          </HamburgerContainer>
        )}
      </SearchContainer>
      {!isDesktop && (
        <Sidebar
          show={showSidebar}
          onClose={() => {
            setShowSidebar(false);
          }}
        />
      )}
    </HeaderContainer>
  );
};

export default Header;
