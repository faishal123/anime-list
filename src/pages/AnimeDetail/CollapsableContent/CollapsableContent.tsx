import React, { useState } from "react";
import { Collapse, Text, Arrow } from "src/components";
import { Container, TitleContainer } from "./style";

interface CollapsableContentProps {
  children: JSX.Element | JSX.Element[];
  title: string;
  subtitle?: string;
  defaultState?: boolean;
}

const CollapsableContent: React.FC<CollapsableContentProps> = ({
  children,
  title,
  subtitle,
  defaultState = false,
}) => {
  const [expand, setExpand] = useState<boolean>(defaultState);
  return (
    <Container
      onClick={() => {
        setExpand((prev) => !prev);
      }}
    >
      <TitleContainer>
        <Text text={title} size="large" variant="bold" />
        <Arrow rotate={expand ? -135 : 45} />
      </TitleContainer>
      <Collapse isOpen={expand}>
        <>
          {!!subtitle ? (
            <div>
              <Text text={subtitle} size="medium" />
            </div>
          ) : null}
        </>
        <div className="padding--small-b padding--medium-t">{children}</div>
      </Collapse>
    </Container>
  );
};

export default CollapsableContent;
