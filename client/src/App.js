import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { Header } from './components/headers/Header';
import { MainPages } from './components/mainpages/Pages';
import { Row, Col } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';


function App() {
  const [isSearch, setIsSearch] = useState(false);
  return (
    <Router>
      <div className="App">
      <ToastContainer />

        <Header isSearch={isSearch} setIsSearch={setIsSearch} />
        <Row width="100%">
          <Col width="100%" xs="12" sm="12" md="12" lg="12">
            <MainPages isSearch={isSearch} />
          </Col>
        </Row>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
