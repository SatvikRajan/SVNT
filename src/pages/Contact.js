import React from 'react';
import contact from '../images/contact.jpg';
import Form from 'react-bootstrap/Form';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-image-container">
        <img src={contact} alt="Contact" className="img-fluid contact-image" />
        <div className="text">How may we help you?</div>
      </div>

      <div className="form-body">
        <p className="form-text">Write to us</p>
        <div className="container">

          {/* Checkbox Section 1 */}
          <div className="checkbox">
            {['Request for Proposal', 'Issue Escalation'].map((label, index) => (
              <Form.Check
                key={index}
                inline
                label={label}
                name="group1"
                type="radio"
                id={`checkbox-${index}`}
              />
            ))}
            {['Media Enquiries', 'Partnership Opportunities'].map((label, index) => (
              <Form.Check
                key={index}
                inline
                label={label}
                name="group1"
                type="radio"
                id={`checkbox-${index + 2}`} // Adjust index to avoid collision
              />
            ))}
          </div>
          <div className="form">
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type='text' placeholder="Company Name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type='text' placeholder="Designation" />
              </Form.Group>
            </Form>
          </div>
          <div className="form">
            <Form>
              <Form.Group className="mb-3">
                <Form.Control type="number" placeholder="Phone Number" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type='email' placeholder="Email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type='text' placeholder="Country" />
              </Form.Group>
            </Form>
          </div>

          <Form.Group controlId="subject" className="subject">
            <Form.Control type="text" placeholder="Subject" aria-describedby="passwordHelpBlock" />
          </Form.Group>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" placeholder='Message' rows={6} />
          </Form.Group>
          <input class="btn btn-primary submit" type="submit" value="Submit"/>
        </div>
      </div>
      <div className="location">
        <h1>Locations</h1>
        <div className="offices">
          
        </div>
      </div>
    </div>
  );
};

export default Contact;
