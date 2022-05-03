import React, { useEffect, useState } from "react";
import { SidebarContainer, CloseArea, SidebarMain } from "./style";
import Text from "../Text";
import Line from "../Line";
import Button from "../Button";
import Link from "next/link";

interface SidebarProps {
  show: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ show, onClose }) => {
  const [mounted, setMounted] = useState<boolean>(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (mounted) {
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
