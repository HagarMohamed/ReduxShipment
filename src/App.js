import { Container } from "react-bootstrap";
import ShipmentDetails from "./Components/ShipmentDetails";
import ShipmentTable from "./Components/ShipmentTable";
import NavBar from "./Utilty/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="font">
      <NavBar/>
      <Container className=''>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<ShipmentTable/>}/>
          <Route path='/shipment/:orderNo' element={<ShipmentDetails/>}/>
        </Routes>
        </BrowserRouter>
        
      </Container>
      
    </div>
  );
}

export default App;
