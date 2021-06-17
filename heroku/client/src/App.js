import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Footer } from './components/footer/Footer';
import { Header } from './components/headers/Header';
import { MainPages } from './components/mainpages/Pages';
import { Row, Col } from 'react-bootstrap';

function App() {
  const [isScroll, setIsScroll] = useState(false);
  return (
    <Router>
      <div className="App">
        <Header isScroll={isScroll} setIsScroll={setIsScroll} />
        <Row width="100%">
          <Col width="100%" xs="12" sm="12" md="12" lg="12">
            <MainPages isScroll={isScroll} />
          </Col>
        </Row>

        <Footer />
      </div>
    </Router>
  );
}

export default App;