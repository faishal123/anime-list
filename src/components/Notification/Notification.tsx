/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import {
  ContainerNotification,
  WrapperContent,
  CloseButton,
  Wrapmessage,
  Close,
} from "./style";
import Text from "../Text";
import { createPortal } from "react-dom";

interface NotificationProps {
  type: "success" | "error";
  message?: string | null;
  onClose?: () => void;
}

function useHideNotif(
  action: () => void,
  delay: number,
  message?: string | null
) {
  useEffect(() => {
    const handler = setTimeout(() => {
      if (!!message) {
        action();
      }
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [action, delay]);

  return null;
}

const Notification: React.FC<NotificationProps> = ({
  type,
  message,
  onClose = () => null,
}) => {
  const [loaded, setLoaded] = useState<boolean>(false);
  useHideNotif(onClose, 4800, message);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const RenderClose = (onClose: () => void) => {
    return (
      <CloseButton
        onClick={() => onClose()}
        role="button"
        tabIndex={0}
        id={"close-button-notification"}
        data-testid={"close-button-notification"}
      >
        <Close color={"white"} />
      </CloseButton>
    );
  };
  if (loaded && !!message) {
    return createPortal(
      <>
        <ContainerNotification type={type}>
          <WrapperContent>
            <Wrapmessage>
              <Text text={message} size="xmedium" />
            </Wrapmessage>
            {RenderClose(onClose)}
          </WrapperContent>
        </ContainerNotification>
      </>,
      document.body
    );
  }
  return null;
};

export default Notification;
