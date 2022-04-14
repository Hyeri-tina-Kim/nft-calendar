import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "semantic-ui-react";
import { RootState } from "../reducers";
import { CLOSE_MODAL } from "../reducers/alertReducer";

const Alert = () => {
  const dispatch = useDispatch();
  const { isOpen, message } = useSelector(
    (state: RootState) => state.alertReducer
  );

  return (
    <Modal
      dimmer="blurring"
      size="small"
      open={isOpen}
      onClose={() => dispatch({ type: CLOSE_MODAL })}
    >
      <Modal.Content>저장되었습니다.</Modal.Content>
      <Modal.Actions>
        <Button positive onClick={() => dispatch({ type: CLOSE_MODAL })}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default Alert;
