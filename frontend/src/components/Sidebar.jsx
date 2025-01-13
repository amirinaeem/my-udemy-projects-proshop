import React from 'react';
import { Accordion, Form } from 'react-bootstrap';

const Sidebar = () => {
  return (
    <Accordion defaultActiveKey='0' className='my-3'>
      {/* Example Filter Categories */}
      <Accordion.Item eventKey='0'>
        <Accordion.Header>Categories</Accordion.Header>
        <Accordion.Body>
          <ul>
            <li>Site Templates</li>
            <li>UI Templates</li>
            <li>WordPress</li>
            <li>Courses</li>
            {/* Add more categories */}
          </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey='1'>
        <Accordion.Header>Price</Accordion.Header>
        <Accordion.Body>
          <Form.Range />
        </Accordion.Body>
      </Accordion.Item>
      {/* Add more filters as needed */}
    </Accordion>
  );
};

export default Sidebar;
