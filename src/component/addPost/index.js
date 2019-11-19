import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import "./addPost.css";
import { addPostApi } from '../../action.js';
import { connect } from "react-redux";
const ModalExample = props => {
  const { buttonLabel, className } = props;

  const [modal, setModal] = useState(false);
  const [desc, setDesc] = useState("med");
  const [file, setFile] = useState(null);

  const toggle = () => setModal(!modal);
  const addPost = e => {
    setModal(!modal);
    var formData = new FormData();
    formData.append("uploadfile", file);
    console.log("description ==== > ", desc)
    addPostApi(formData,desc)
  }
  const onChangeDesc = (e) => {
    setDesc(e.target.value);
  }

  const onAddFile = e => {
    setFile(e.target.files[0])
  }

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
            id="file"
            name="avatar"
            accept="image/png, image/jpeg"
            onChange={onAddFile}
          />
          <label for="avatar" style={{ display: "block", marginTop: "10px" }}>
            Add description
          </label>
          <textarea placeholder="description" className="form-control" onChange={onChangeDesc}/>
        </ModalBody>
        <ModalFooter>
          <button className="add-image-style" onClick={addPost}>
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


const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = { addPost: addPostApi }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ModalExample);