import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getAllData, handleUpdate } from '../Actions/action';
import { handleDelete } from '../Actions/action';
import { Link } from 'react-router-dom';


const ShipmentTable = () => {
    const [items, setItemes] = useState([]);
    const dispatch = useDispatch();
    const allData = useSelector(state => state.data);

    useEffect(() => {
        dispatch(getAllData())
    },[dispatch])
    
    useEffect(() => {
          setItemes(allData);
    },[allData])

  return (
    
    <Container>
      <Table striped bordered hover variant="" className='mt-4'>

      <thead>
        <tr>
            <th>ORDERNO</th>
            <th>DELIVERYDATE</th>
            <th>CUSTOMER</th>
            <th>TRACKINGNO</th>
            <th>STATUS</th>
            <th>CONSIGNEE</th>
            <th></th>
            
        </tr>
      </thead>
      <tbody>
      {items.length >=1 ? (items.map((item, index) =>{
            return(
                // <Link to={`/shipment/${item.id}`}>
                <tr key={index}>
                <td>{item.orderNo}</td>
                <td>{item.date}</td>
                <td>{item.customer}</td>
                <td>{item.trackingNo}</td>
                <td>{item.status}</td>
                <td>{item.consignee}</td>
                <td style={{width: "10%"}}>
                  <Link to={`/shipment/${item.orderNo}`}>
                  <Button  variant="info"><i className="fa fa-id-card" 
                  style={{color: "#fff"}}></i></Button>{" "}
                  </Link>
                  
                  <Button onClick={()=>{dispatch(handleDelete(item.orderNo))}} variant="danger"><i className="fa fa-close"></i></Button>{" "}
                </td>
                </tr>
                // </Link>
            )
        })) 
        : <h2>No Data Found</h2>}
        
      </tbody>
    </Table>
    </Container>
  )
}

export default ShipmentTable
