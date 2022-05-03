import React, { useState } from "react";
import { Text, Input, Button } from "src/components";
import { alphanumericOnly } from "src/constant/pattern";
import {
  addNewCollectionKey,
  collectionKeyAlreadyExist,
} from "src/functions/localStorage";

interface NewCollectionFormProps {
  onCompleted: () => void;
  onCancel: () => void;
}

const NewCollectionForm: React.FC<NewCollectionFormProps> = ({
  onCompleted,
  onCancel,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [inputError, setInputError] = useState("");

  const onSubmit = () => {
    if (!inputValue) {
      setInputError("Please Input Collection Name");
    } else {
      const inputValid = alphanumericOnly.test(inputValue);
      if (inputValid) {
        if (collectionKeyAlreadyExist(inputValue)) {
          setInputError("Collection Already Exist");
        } else {
          addNewCollectionKey(inputValue);
          onCompleted();
        }
      } else {
        setInputError("No Symbol Allowed");
      }
    }
  };
  return (
    <div>
      <Text text="Add New Collection" size="large" variant="bold" />
      <div className="margin--xxlarge-b margin--medium-t">
        <Input
          onChange={(e) => {
            setInputValue(e?.target?.value);
            if (inputError) {
              setInputError("");
            }
          }}
          onKeyDown={(e) => {
            if (e?.keyCode === 13) {
              onSubmit();
            }
          }}
          value={inputValue}
          placeholder="Input Collection Name"
        />
        {inputError && <Text size="small" text={inputError} color="#ff9696" />}
      </div>
      <div className="margin--medium-b">
        <Button
          text="Add"
          size="small"
          onClick={() => {
            onSubmit();
          }}
        />
      </div>
      <Button
        variant="dark"
        text="Cancel"
        size="small"
        onClick={() => {
          onCancel();
        }}
      />
    </div>
  );
};

export default NewCollectionForm;
