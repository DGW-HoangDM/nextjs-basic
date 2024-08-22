import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import useSWR, { useSWRConfig } from 'swr'

interface Iprops {
  modalAddNew: boolean;
  setModalAddNew: (value: boolean) => void;
}

function AddNewModal(props: Iprops) {
  const { modalAddNew, setModalAddNew } = props;
  const { mutate } = useSWRConfig();

  const [author, setAuthor] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleCloseModal = () => {
    setAuthor("");
    setTitle("");
    setContent("");
    setModalAddNew(false);
  }


  const handleSubmit = async () => {
    const rawResponse = await fetch('http://localhost:8000/blogs', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: title,
        author: author,
        content: content
      })      
    });
    const res = await rawResponse.json();
    if(res){
      handleCloseModal();
      mutate('http://localhost:8000/blogs');
    }
  }

  return (
    <>
      <Modal
        show={modalAddNew}
        onHide={() => handleCloseModal()}
        backdrop="static"
        keyboard={false}
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new a blog</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Author</Form.Label>
              <Form.Control type="text" placeholder="" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" placeholder="" value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" rows={3} value={content} onChange={(e) => setContent(e.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleCloseModal()}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmit()}>Add new</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddNewModal;