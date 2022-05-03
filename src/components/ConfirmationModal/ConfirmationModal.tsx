import React from "react";
import Image from "next/image";
import questionMark from "src/assets/svg/questionMarkWhite.svg";
import {
  DeleteModalContainer,
  YesButtonContainer,
} from "src/pages/Collections/List/DeleteCollectionModal/style";
import { Modal, Text, Button } from "src/components";

interface ConfirmationModalProps {
  onLeave: () => void;
  show: boolean;
  onYes: () => void;
  onNo: () => void;
  title: string;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  onLeave,
  show,
  onYes,
  onNo,
  title,
}) => {
  return (
    <Modal show={show} onLeave={onLeave}>
      <DeleteModalContainer>
        <div className="margin--medium-b margin--medium-t">
          <Image
            src={questionMark}
            alt="confirmation"
            width={100}
            height={100}
          />
        </div>
        <Text text={title} align="center" size="xmedium" />
        <YesButtonContainer className="margin--medium-b margin--medium-t">
          <Button
            onClick={() => {
              onYes();
            }}
            text="Yes"
            size="small"
          />
        </YesButtonContainer>
        <Button onClick={() => onNo()} variant="dark" text="No" size="small" />
      </DeleteModalContainer>
    </Modal>
  );
};

export default ConfirmationModal;
