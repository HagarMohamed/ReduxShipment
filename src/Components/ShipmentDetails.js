import React, { useEffect, useRef } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getDetails, handleUpdate } from '../Actions/action';
import { Link, useParams } from 'react-router-dom';

const ShipmentDetails = () => {

    const param = useParams();
    const dispatch = useDispatch();
    const shipItem = useSelector(state => state.detail);

    const orderRef = useRef(null);
    const customerRef = useRef(null);
    const consigneeRef = useRef(null);
    const dateRef = useRef(null);
    const trackingRef = useRef(null);
    const statusRef = useRef(null);


     useEffect(() =>{
        dispatch(getDetails(param.orderNo))
    },[dispatch])

    
    useEffect(() =>{
        orderRef.current.value = shipItem?.orderNo
        dateRef.current.value = shipItem?.date
        customerRef.current.value = shipItem?.customer
        trackingRef.current.value = shipItem?.trackingNo
        statusRef.current.value = shipItem?.status
        consigneeRef.current.value = shipItem?.consignee
        
    },[shipItem])

   const handleUpdateClick = ()=>{
        dispatch(
            //orderNo:orderNo,date:date,customer:customer,trackNo:trackingNo,status:status,consignee:consignee
            handleUpdate(
                orderRef.current.value,
                dateRef.current.value,
                customerRef.current.value,
                trackingRef.current.value,
                statusRef.current.value,
                consigneeRef.current.value
            )
        )
    }
    

  return (

    
    <div>
    <h4 className='shipdetail mt-4'>Shipment Details</h4>
    <hr></hr>
    <Form>
    <Row>
      <Col>
      <Form.Label>orderNo</Form.Label>
      <Form.Control className="mb-3" type="text" 
       value={orderRef.value} defaultValue="" ref={orderRef} readOnly/>

      <Form.Label>customer</Form.Label>
      <Form.Control className="mb-3" type="text" ref={customerRef} value={customerRef.value} defaultValue=""/>

      <Form.Label>consignee</Form.Label>
      <Form.Control className="mb-3" type="text" ref={consigneeRef} value={consigneeRef.value} defaultValue=""/>
    </Col>

    <Col>
      <Form.Label>date</Form.Label>
      <Form.Control className="mb-3" type="text" ref={dateRef} value={dateRef.value} defaultValue=""/>

      <Form.Label>trakingNo</Form.Label>
      <Form.Control className="mb-3" type="text" ref={trackingRef} value={trackingRef.value} defaultValue="" readOnly/>

      <Form.Label>status</Form.Label>
      <Form.Control className="mb-3" type="text" ref={statusRef} value={statusRef.value} defaultValue=""/>
    </Col>

      
    </Row>
    </Form>

    <div className='d-flex justify-content-between'>
    <Button  variant="warning"><Link to="/" style={{textDecoration: "none",
  color: "black"}}>Back</Link></Button>{' '}

<Button onClick={handleUpdateClick}  variant="primary" style={{backgroundColor: "#5e1d6eb3"}}><Link to="/" style={{textDecoration: "none",
  color: "black"}}>Update</Link></Button>{' '}
    </div>
  </div>
  )
}

export default ShipmentDetails
