import React, { useEffect } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getDetails } from '../Actions/action';
import { Link, useParams } from 'react-router-dom';

const ShipmentDetails = () => {

    const param = useParams();
    const dispatch = useDispatch();
    const shipItem = useSelector(state => state.detail);

     useEffect(() =>{
        dispatch(getDetails(param.orderNo))

        },[dispatch])
    

  return (

    
    <div>
    <h4 className='shipdetail mt-4'>Shipment Details</h4>
    <hr></hr>
    <Form>
    <Row>
      <Col>
      <Form.Label>orderNo</Form.Label>
      <Form.Control className="mb-3" type="text" value={shipItem?.orderNo}/>

      <Form.Label>customer</Form.Label>
      <Form.Control className="mb-3" type="text" value={shipItem?.customer}/>

      <Form.Label>consignee</Form.Label>
      <Form.Control className="mb-3" type="text" value={shipItem?.consignee}/>
    </Col>

    <Col>
      <Form.Label>date</Form.Label>
      <Form.Control className="mb-3" type="text" value={shipItem?.date}/>

      <Form.Label>trakingNo</Form.Label>
      <Form.Control className="mb-3" type="text" value={shipItem?.trackingNo}/>

      <Form.Label>status</Form.Label>
      <Form.Control className="mb-3" type="text" value={shipItem?.status}/>
    </Col>

      
    </Row>
    </Form>

    <Button  variant="warning"><Link to="/" style={{textDecoration: "none",
  color: "black"}}>Back</Link></Button>{' '}
  </div>
  )
}

export default ShipmentDetails
