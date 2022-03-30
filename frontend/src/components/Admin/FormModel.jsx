import { Modal, Button, Form, Row } from "react-bootstrap";
import { useState, useEffect } from "react";

let defaultMovie = {
  _id: "",
  title: "",
  desc: "",
  img: "",
  trailer: "",
  video: "",
  year: "",
  rate: "",
  limit: "",
  genere: "",
  isSeries: "",
};

const FormModel = (props) => {
  const { onSubmit, showForm, setShowForm, movie } = props;
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    event.preventDefault();
    if (!form.checkValidity() === false) {
      onSubmit(currentMovie);
    } else {
      setValidated(true);
    }
  };
  const [currentMovie, setCurrentMovie] = useState(movie || defaultMovie);

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "isSeries") {
      currentMovie.isSeries = value;
    }
    setCurrentMovie((m) => ({ ...m, [name]: value }));
  };

  useEffect(() => {
    setCurrentMovie(movie || defaultMovie);
  }, [showForm, movie]);

  const handleClose = () => {
    setShowForm(false);
  };
  return (
    <>
      <Modal show={showForm} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="m-auto text-orange">
            Movie Information
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-5">
          <Form onSubmit={handleSubmit} noValidate validated={validated}>
            <Row className="mb-3">
              <Form.Group
                className="mb-3"
                md="6"
                controlId="validationCustomTitle"
              >
                <Form.Label className="ms-2">Title</Form.Label>
                <Form.Control
                  type="text"
                  className="bg-light"
                  placeholder="video title"
                  name="title"
                  value={currentMovie.title}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid title.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                className="mb-3"
                md="6"
                controlId="validationCustomDescription"
              >
                <Form.Label className="ms-2">Description</Form.Label>
                <Form.Control
                  type="text"
                  className="bg-light"
                  placeholder="video description"
                  name="desc"
                  value={currentMovie.desc}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid description.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                className="mb-3"
                md="6"
                controlId="validationCustomImage"
              >
                <Form.Label className="ms-2">Image</Form.Label>
                <Form.Control
                  type="text"
                  className="bg-light"
                  placeholder="video image"
                  name="img"
                  value={currentMovie.img}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid image.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                className="mb-3"
                md="6"
                controlId="validationCustomTrailer"
              >
                <Form.Label className="ms-2">Trailer</Form.Label>
                <Form.Control
                  type="text"
                  className="bg-light"
                  placeholder="video trailer"
                  name="trailer"
                  value={currentMovie.trailer}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid trailer.
                </Form.Control.Feedback>
              </Form.Group>

              <Form.Group
                className="mb-3"
                md="6"
                controlId="validationCustomVideo"
              >
                <Form.Label className="ms-2">Video</Form.Label>
                <Form.Control
                  type="text"
                  className="bg-light"
                  placeholder="video video"
                  name="video"
                  value={currentMovie.video}
                  onChange={handleChange}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please provide a valid video.
                </Form.Control.Feedback>
              </Form.Group>

              <Row className="mb-3 mx-0 px-0 justify-content-between">
                <Form.Group
                  className="col-6"
                  md="6"
                  controlId="validationCustomYear"
                >
                  <Form.Label className="ms-2">Year</Form.Label>
                  <Form.Control
                    type="date"
                    className="bg-light"
                    placeholder="video year"
                    name="year"
                    value={currentMovie.year}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please fill input.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="col-6"
                  md="6"
                  controlId="validationCustomLimit"
                >
                  <Form.Label className="ms-2">Limit</Form.Label>
                  <Form.Control
                    type="text"
                    className="bg-light"
                    placeholder="video limit"
                    name="limit"
                    value={currentMovie.limit}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please fill input.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-3 mx-0 px-0 justify-content-between">
                <Form.Group
                  className="col-6"
                  md="6"
                  controlId="validationCustomRate"
                >
                  <Form.Label className="ms-2">Rate</Form.Label>
                  <Form.Control
                    type="text"
                    className="bg-light"
                    placeholder="video rate"
                    name="rate"
                    value={currentMovie.rate}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please fill input.
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group
                  className="col-6"
                  md="6"
                  controlId="validationCustomGenere"
                >
                  <Form.Label className="ms-2">Genere</Form.Label>
                  <Form.Control
                    type="text"
                    className="bg-light"
                    placeholder="video genere"
                    name="genere"
                    value={currentMovie.genere}
                    onChange={handleChange}
                    required
                  />
                  <Form.Control.Feedback type="invalid">
                    Please fill input.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>

              <Row className="mb-3 mx-0 px-0 justify-content-between">
                <Form.Group md="6" controlId="validationCustomType">
                  <Form.Label className="ms-2">Type</Form.Label>
                  <Row className="px-3 mt-3">
                    <Form.Check
                      className="col-6"
                      label="Series"
                      name="isSeries"
                      type="radio"
                      id={`series-radio`}
                      value={true}
                      onChange={handleChange}
                      required
                    />
                    <Form.Check
                      className="col-6"
                      label="Movie"
                      name="isSeries"
                      type="radio"
                      id={`movie-radio`}
                      value={false}
                      onChange={handleChange}
                      required
                    />
                  </Row>

                  <Form.Control.Feedback type="invalid">
                    Please fill input.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
            </Row>

            <Row className="mt-4 flex-row-reverse">
              <Button type="submit" variant="danger col-3 text-center">
                Save
              </Button>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default FormModel;
