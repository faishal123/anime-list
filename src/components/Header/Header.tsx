import React from "react";
import Logo from "../Logo";
import { HeaderContainer, SearchContainer } from "./style";
import searchIcon from "src/assets/svg/searchIcon.svg";
import hamburgerIcon from "src/assets/svg/hamburgerIcon.svg";
import Image from "next/image";

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <SearchContainer>
        <Image alt="search" src={searchIcon} />
        <Image alt="hamburger" src={hamburgerIcon} />
      </SearchContainer>
    </HeaderContainer>
  );
};

export default Header;
