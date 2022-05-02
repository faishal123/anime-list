import React, { useState } from "react";
import Logo from "../Logo";
import { HeaderContainer, SearchContainer } from "./style";
import searchIcon from "src/assets/svg/searchIcon.svg";
import hamburgerIcon from "src/assets/svg/hamburgerIcon.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import Sidebar from "../Sidebar";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const router = useRouter();
  return (
    <HeaderContainer>
      <Logo
        onClick={() => {
          router.push("/?page=1");
        }}
      />
      <SearchContainer>
        <Image alt="search" src={searchIcon} />
        <Image
          alt="hamburger"
          src={hamburgerIcon}
          onClick={() => {
            setShowSidebar((prev) => !prev);
          }}
        />
      </SearchContainer>
      <Sidebar
        show={showSidebar}
        onClose={() => {
          setShowSidebar(false);
        }}
      />
    </HeaderContainer>
  );
};

export default Header;
