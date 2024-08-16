import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

interface Iprops {
  blogs: IBlog[];
}

const handleEdit = () => {
  console.log('Edit button clicked');
}

const handleView = () => {
  console.log('View button clicked');
}

const handleDelete = () => {
  console.log('Delete button clicked');
}

const ComponentTable = (props: Iprops) => {
  const { blogs } = props;
  console.log('check blog', blogs);
  return (
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
              <td>{index + 1}</td>
              <td>{item.author}</td>
              <td>{item.title}</td>
              <td>
                <Button as="a" variant="primary" onClick={() => handleEdit()}>Edit</Button>
                <Button className='mx-2' as="a" variant="success" onClick={() => handleView()}>View</Button>
                <Button as="a" variant="danger" onClick={() => handleDelete()}>Delete</Button>
              </td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  );
}

export default ComponentTable;