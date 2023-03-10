import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal } from "react-bootstrap";
import { createList } from "../../redux/listsSlice";

function NewListModal({ showModalNewList, setShowModalNewList }) {
  const [inputNewList, setInputNewList] = useState("");
  const dispatch = useDispatch();

  return (
    <Modal
      show={showModalNewList}
      onHide={() => setShowModalNewList(false)}
      centered
    >
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (inputNewList !== "") {
            dispatch(createList(inputNewList));
            setInputNewList("");
            setShowModalNewList(false);
          }
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Nueva Lista</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Nombre de la lista"
            onChange={(e) => setInputNewList(e.target.value)}
            value={inputNewList}
          />
        </Modal.Body>

        <Modal.Footer>
          <Button
            onClick={() => {
              setInputNewList("");
              setShowModalNewList(false);
            }}
            variant="light"
            style={{ color: "blue" }}
          >
            CANCELAR
          </Button>
          <Button type="submit" variant="primary">
            CREAR
          </Button>
        </Modal.Footer>
      </form>
    </Modal>
  );
}

export default NewListModal;
