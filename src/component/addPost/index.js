import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./addPost.css";
const ModalExample = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <button className="add-post-style" onClick={toggle}>
        <i class="fas fa-folder-plus"></i>
      </button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add post</ModalHeader>
        <ModalBody>
          <label for="avatar" style={{ display: "block", marginTop: "10px" }}>
            add image
          </label>
          <input
            type="file"
            id="avatar"
            name="avatar"
            accept="image/png, image/jpeg"
          />
          <label for="avatar" style={{ display: "block", marginTop: "10px" }}>
            add description
          </label>
          <textarea placeholder="description" className="form-control" />
        </ModalBody>
        <ModalFooter>
          <button className="add-image-style" onClick={toggle}>
            Add post
          </button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModalExample;
