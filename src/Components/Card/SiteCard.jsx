import ButtonComponent from "Components/Button/Button";
import Img from "Components/Img/Img";
import React, { useState } from "react";
import { Card, Modal } from "react-bootstrap";

const SiteCard = ({ imgSrc, componentOption, subComponentOption }) => {
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState(null);



  const handleShowModal = () => {
    setModalData({ heading: componentOption, image: imgSrc });
    setModalShow(true);
  };

  const handleCloseModal = () => setModalShow(false);

  const cardStyle = {
    fontSize: "13px",
    padding: "8px 12px",
    backgroundColor: "#f1f1f1",
  };

  return (
    <>
      <Card>
        <Card.Body>
          <Img src={imgSrc} width="100%" height="250rem" />

          <div className="mb-3 mt-3">
            <p className="mb-2">Component</p>
            <Card style={cardStyle}>{componentOption}</Card>
          </div>

          <div>
            <p className="mb-2">Sub-component</p>
            <Card style={cardStyle}>{subComponentOption}</Card>
          </div>
          <br />

          <ButtonComponent
            type="button"
            className="w-100 btn btn-brand-color text-center"
            buttonName="View"
            clickFunction={handleShowModal}
          />
        </Card.Body>
      </Card>

      <Modal
        size="xl"
        centered
        show={modalShow}
        onHide={handleCloseModal}
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {modalData?.heading}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Img src={modalData?.image} width="100%" height="100%" />
        </Modal.Body>
        <Modal.Footer>
          <ButtonComponent
            type="button"
            className="btn btn-brand-color text-center"
            buttonName="Close"
            clickFunction={handleCloseModal}
          />
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SiteCard;
