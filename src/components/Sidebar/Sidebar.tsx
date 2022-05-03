import React, { useEffect, useState } from "react";
import {
  SidebarContainer,
  CloseArea,
  SidebarMain,
  DesktopSidebarContainer,
  DesktopLogoContainer,
  DesktopSidebarContentContainer,
  SingleMenu,
} from "./style";
import Text from "../Text";
import Line from "../Line";
import Logo from "../Logo";
import Image from "next/image";
import Link from "next/link";
import { useDesktop } from "src/functions/handleScreen";
import Button from "../Button";
import collectionPassive from "src/assets/svg/collectionPassive.svg";
import collectionActive from "src/assets/svg/collectionActive.svg";
import homePassive from "src/assets/svg/homePassive.svg";
import homeActive from "src/assets/svg/homeActive.svg";
import { useRouter } from "next/router";

interface SidebarProps {
  show: boolean;
  onClose: () => void;
}

const menus = [
  {
    passive: homePassive,
    active: homeActive,
    activeUrl: "/?page=",
    text: "Home",
    url: "/?page=1",
  },
  {
    passive: collectionPassive,
    active: collectionActive,
    activeUrl: "/collection",
    text: "Collection",
    url: "/collections",
  },
];

const Sidebar: React.FC<SidebarProps> = ({ show, onClose }) => {
  const router = useRouter();
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const isDesktop = useDesktop();
  if (mounted) {
    if (isDesktop) {
      return (
        <DesktopSidebarContainer>
          <DesktopLogoContainer>
            <Link passHref href="/?page=1">
              <a>
                <Logo />
              </a>
            </Link>
          </DesktopLogoContainer>
          <DesktopSidebarContentContainer>
            {menus.map((m) => {
              const isActive = router?.asPath?.includes(m?.activeUrl);
              return (
                <Link passHref href={m?.url} key={m?.text}>
                  <a>
                    <SingleMenu key={m?.text} active={isActive}>
                      <Image
                        width={20}
                        height={20}
                        src={m?.passive}
                        alt={m?.text}
                      />
                      <Text text={m?.text} size="xmedium" />
                    </SingleMenu>
                  </a>
                </Link>
              );
            })}
          </DesktopSidebarContentContainer>
        </DesktopSidebarContainer>
      );
    }
    return (
      <SidebarContainer show={show}>
        <CloseArea onClick={onClose} />
        <SidebarMain show={show}>
          <div>
            <Text block text="Hello," size="xmedium" />
            <Text text="Guest" size="xxlarge" variant="bold" />
          </div>
          <div className="margin--large-b margin--medium-t">
            <Line color="#505050" width="100%" height="1px" />
          </div>
          <Link passHref href="/collections">
            <a>
              <Button
                size="small"
                text="See My Collections"
                variant="primary"
              />
            </a>
          </Link>
        </SidebarMain>
      </SidebarContainer>
    );
  }
  return null;
};

export default Sidebar;
