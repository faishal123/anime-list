import React, { useState, useRef, useEffect } from "react";

interface CollapseProps {
  children: JSX.Element | JSX.Element[];
  maxHeight?: number;
  isOpen: boolean;
}

const Collapse: React.FC<CollapseProps> = ({ children, maxHeight, isOpen }) => {
  const [childHeight, setChildHeight] = useState<string>("0px");
  const childRef = useRef<HTMLDivElement | null>(null);
  const getElementHeight = () => {
    if (maxHeight) {
      return `${
        maxHeight && maxHeight < (childRef?.current?.offsetHeight || 0)
          ? maxHeight
          : childRef?.current?.offsetHeight
      }px`;
    }
    return `${childRef?.current?.offsetHeight}px`;
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
      style={{
        overflow: "auto",
        transition: "0.3s",
        height: childHeight,
      }}
    >
      <div ref={childRef}>{children}</div>
    </div>
  );
};

export default Collapse;
