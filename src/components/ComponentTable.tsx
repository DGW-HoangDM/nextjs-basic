import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import ModalViewBlog from './ModalViewBlog';
import AddNewModal from './Add.New.Modal';
import Link from 'next/link';

interface Iprops {
  blogs: IBlog[];
}

const ComponentTable = (props: Iprops) => {
  const { blogs } = props;
  const [blogItem, setBlogItem] = useState(false);
  const [modalViewShow, setModalViewShow] = useState(false);
  const [modalAddNew, setModalAddNew] = useState<boolean>(false);

  const handleEdit = () => {
    console.log('Edit button clicked');
  }

  const handleView = (item: any) => {
    console.log('View button clicked', item);
    setBlogItem(item)
    setModalViewShow(true)
  }

  const handleDelete = () => {
    console.log('Delete button clicked');
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: "space-between", marginBottom: '10px', marginTop: '20px' }}>
        <h3>Table Blogs</h3>
        <Button variant="primary" onClick={() => setModalAddNew(true)}>Add New</Button>
      </div>
      <Table striped bordered hover responsive="md">
        <thead>
          <tr>
            <th>#</th>
            <th>Author</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {blogs?.map((item, index) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.author}</td>
                <td>{item.title}</td>
                <td>
                  <Link className='btn btn-primary' href={`/blog/${item.id}`}>View</Link>
                  <Button className='mx-2' as="a" variant="primary" onClick={() => handleEdit()}>Edit</Button>
                  <Button as="a" variant="danger" onClick={() => handleDelete()}>Delete</Button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </Table>
      <ModalViewBlog
        show={modalViewShow}
        data={blogItem}
        onHide={() => setModalViewShow(false)}
      />

      <AddNewModal
        modalAddNew={modalAddNew}
        setModalAddNew={setModalAddNew}
      />

    </>
  );
}

export default ComponentTable;