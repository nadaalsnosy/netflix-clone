import { Modal, Button, Form } from "react-bootstrap";

const ConfirmForm = (props) => {
  const { onSubmit, showConfirm, setShowConfirm, movie } = props;
  const handleClose = () => setShowConfirm(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(movie);
  };

  return (
    <>
      <Form>
        <Modal
          className="d-flex justify-content-center align-items-center"
          show={showConfirm}
          onHide={handleClose}
        >
          <Modal.Header closeButton>
            <Modal.Title className="">Confirm delete</Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-3">
            <h4 className="fw-normal">
              Are you sure you want to delete this item?
            </h4>
          </Modal.Body>
          <Modal.Footer className="p-3 px-4">
            <Button variant="danger" onClick={handleClose}>
              No
            </Button>
            <Button variant="warning" onClick={handleSubmit}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
      </Form>
    </>
  );
};

export default ConfirmForm;
