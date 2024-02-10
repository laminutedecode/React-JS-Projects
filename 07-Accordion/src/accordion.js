import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Accordion } from 'react-bootstrap';
import './accordion.css'

const Accor = () => {
  return (
    <div>
      <Accordion defaultActiveKey="1" className="mt-5  p-2 w-50 mx-auto ">
        <Accordion.Item className="item" eventKey="0">
          <Accordion.Header>Item 1</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            quos in quaerat animi dolorum repudiandae aut harum, doloribus
            placeat tempora?
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="item" eventKey="1">
          <Accordion.Header>Item 2</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            quos in quaerat animi dolorum repudiandae aut harum, doloribus
            placeat tempora?
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item className="item" eventKey="2">
          <Accordion.Header>Item 3</Accordion.Header>
          <Accordion.Body>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero
            quos in quaerat animi dolorum repudiandae aut harum, doloribus
            placeat tempora?
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Accor