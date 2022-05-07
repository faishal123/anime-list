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
      id={`collapsible-toggle-${title}`}
      data-testid={`collapsible-toggle-${title}`}
      onClick={() => {
        setExpand((prev) => !prev);
      }}
    >
      <TitleContainer>
        <Text
          id={`txt-collapsible-${title}`}
          text={title}
          size="large"
          variant="bold"
        />
        <Arrow id="arw-toggleExpand" rotate={expand ? -135 : 45} />
      </TitleContainer>
      <Collapse id={`collapse-${title}`} isOpen={expand}>
        <>
          {!!subtitle ? (
            <div>
              <Text
                id={`txt-collapsible-${subtitle}`}
                text={subtitle}
                size="medium"
              />
            </div>
          ) : null}
        </>
        <div className="padding--small-b padding--medium-t">{children}</div>
      </Collapse>
    </Container>
  );
};

export default CollapsableContent;
