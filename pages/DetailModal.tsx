import { useDispatch, useSelector } from "react-redux";
import { Button, Modal } from "semantic-ui-react";
import { RootState } from "../reducers";
import { CLOSE_MODAL } from "../reducers/modalReducer";

const DetailModal = () => {
  const dispatch = useDispatch();
  const { isOpen, item } = useSelector(
    (state: RootState) => state.modalReducer
  );

  return (
    <Modal
      size="small"
      open={isOpen}
      onClose={() => dispatch({ type: CLOSE_MODAL })}
    >
      <Modal.Header>{item?.name}</Modal.Header>
      <Modal.Content>
        <p>
          {item?.startDate} ~ {item?.endDate}
        </p>
        <p>{item?.desc}</p>
      </Modal.Content>
      <Modal.Actions>
        <Button positive onClick={() => dispatch({ type: CLOSE_MODAL })}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default DetailModal;
