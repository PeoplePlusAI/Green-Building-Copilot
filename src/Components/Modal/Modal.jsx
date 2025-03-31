import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { updateModalShow } from 'Views/Common/Slice/Common_slice';

const ModalComponent = ({
  componentFrom,

  modalSize,
  modalClassname,
  modalDialogClassName,
  modalClickOutsideHide,
  modalFullscreen,
  modalCentered,
  modalCloseButton,

  showModalHeader,
  modalHeaderTitleClassname,
  modalHeaderClassname,
  modalHeader,

  modalBodyClassname,
  modalBody,

  showModalFooter,
  modalFooterClassname,
  modalFooter,
}) => {
  const dispatch = useDispatch();
  const { modalShow } = useSelector((state) => state.commonState);

  return (

    <Modal
      show={modalShow}
      size={modalSize}
      backdrop={modalClickOutsideHide ? "" : "static"}
      fullscreen={modalFullscreen}
      centered={modalCentered}
      contentClassName={modalClassname}
      dialogClassName={modalDialogClassName}
      onHide={() => dispatch(updateModalShow())}
    >

      {/* Header */}
      {
        showModalHeader ? <Modal.Header closeButton={modalCloseButton} className={modalHeaderClassname}>
          <Modal.Title className={modalHeaderTitleClassname}>
            {modalHeader}
          </Modal.Title>
        </Modal.Header>
          :
          null
      }



      {/* Body */}
      <Modal.Body className={modalBodyClassname}>
        {modalBody}
      </Modal.Body>


      {/* Footer */}
      {
        showModalFooter ? <Modal.Footer className={modalFooterClassname}>
          {modalFooter}
        </Modal.Footer>
          :
          null
      }


    </Modal>
  )
}

export default ModalComponent