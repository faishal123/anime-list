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
import Button from "../Button";
import collectionPassive from "src/assets/svg/collectionPassive.svg";
import collectionActive from "src/assets/svg/collectionActive.svg";
import homePassive from "src/assets/svg/homePassive.svg";
import homeActive from "src/assets/svg/homeActive.svg";
import { useRouter } from "next/router";

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

type MobileSidebarProps = {
  show: boolean;
  onClose: () => void;
  id: string;
};

type DesktopSidebarProps = { id: string };

type MobileSidebarType = React.FC<MobileSidebarProps>;

type DesktopSidebarType = React.FC<DesktopSidebarProps>;

const DesktopSidebar: DesktopSidebarType = ({ id }) => {
  const router = useRouter();
  return (
    <DesktopSidebarContainer id={id} data-testid={id}>
      <DesktopLogoContainer>
        <Link passHref href="/?page=1">
          <a>
            <Logo id="logo-animu" />
          </a>
        </Link>
      </DesktopLogoContainer>
      <DesktopSidebarContentContainer>
        {menus.map((m) => {
          const isActive = router.asPath.includes(m.activeUrl);
          return (
            <Link passHref href={m.url} key={m.text}>
              <a>
                <SingleMenu key={m.text} active={isActive}>
                  <Image width={20} height={20} src={m.passive} alt={m.text} />
                  <Text
                    id={`nav-menu-${m.text}`}
                    text={m.text}
                    size="xmedium"
                  />
                </SingleMenu>
              </a>
            </Link>
          );
        })}
      </DesktopSidebarContentContainer>
    </DesktopSidebarContainer>
  );
};

const MobileSidebar: MobileSidebarType = ({ show, onClose, id }) => {
  return (
    <SidebarContainer show={show} id={id} data-testid={id}>
      <CloseArea
        id={`${id}-closeArea-show-${show}`}
        data-testid={`${id}-closeArea-show-${show}`}
        onClick={onClose}
      />
      <SidebarMain
        id={`${id}-mainContainer-show-${show}`}
        data-testid={`${id}-mainContainer-show-${show}`}
        show={show}
      >
        <div>
          <Text id="txt-hello" block text="Hello," size="xmedium" />
          <Text id="txt-userName" text="Guest" size="xxlarge" variant="bold" />
        </div>
        <div className="margin--large-b margin--medium-t">
          <Line
            id="line-name-separator"
            color="#505050"
            width="100%"
            height="1px"
          />
        </div>
        <Link passHref href="/collections">
          <a>
            <Button
              id="btn-seeCollection"
              size="small"
              text="See My Collections"
              variant="primary"
            />
          </a>
        </Link>
      </SidebarMain>
    </SidebarContainer>
  );
};

type SidebarProps =
  | { isDesktop: true; props: DesktopSidebarProps }
  | { isDesktop: false; props: MobileSidebarProps };

const Sidebar: React.FC<SidebarProps> = ({ isDesktop, props }) => {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  let inner: React.ReactNode;
  if (isDesktop) {
    inner = <DesktopSidebar {...props} />;
  } else {
    inner = <MobileSidebar {...props} />;
  }

  if (mounted) {
    return inner;
  }
  return null;
};

export default Sidebar;
