import Table from 'react-bootstrap/Table';

function TableDisplay() {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Lot Date</th>
          <th>Type</th>
          <th>Initial Count</th>
          <th>Sub-Group</th>
          
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
          <th></th>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableDisplay;


const display = (
    <Table striped bordered variant = 'dark'>
        {/* thead will show initial values for the table */}
    <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Lot Date</th>
          <th>Type</th>
          <th>Initial Count</th>
          <th>Sub-Group</th> 
        </tr>
    </thead>
        {springs.map((spring) => (
            <tbody>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
            </tbody>
        ))}
    </Table>
)