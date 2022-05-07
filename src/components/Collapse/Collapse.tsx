import React, { useState, useRef, useEffect } from "react";

interface CollapseProps {
  children: JSX.Element | JSX.Element[];
  maxHeight?: number;
  isOpen: boolean;
  id: string;
}

const Collapse: React.FC<CollapseProps> = ({
  children,
  maxHeight,
  isOpen,
  id,
}) => {
  const [childHeight, setChildHeight] = useState<string>("0px");
  const childRef = useRef<HTMLDivElement | null>(null);
  const current = childRef.current || ({ offsetHeight: 0 } as HTMLDivElement);
  const getElementHeight = () => {
    if (maxHeight) {
      return `${
        maxHeight && maxHeight < current.offsetHeight
          ? maxHeight
          : current.offsetHeight
      }px`;
    }
    return `${current.offsetHeight}px`;
  };

  useEffect(() => {
    if (isOpen) {
      setChildHeight(getElementHeight());
    } else {
      setChildHeight("0px");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [children, isOpen]);

  return (
    <div
      id={id}
      data-testid={id}
      style={{
        overflow: "auto",
        transition: "0.3s",
        height: childHeight,
      }}
    >
      <div data-testid={`${id}-isOpen-${isOpen}`} ref={childRef}>
        {children}
      </div>
    </div>
  );
};

export default Collapse;
