import React from 'react';
import contact from '../images/contact.jpg';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
const LocationCard = ({ title, address }) => {
  const handleCardClick = () => {
    const formattedAddress = encodeURIComponent(address);
    const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${formattedAddress}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <Card style={{ width: '20rem', height: '10rem', textAlign: 'left', marginRight: '100px', marginLeft: '100px' }} onClick={handleCardClick}>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{address}</Card.Text>
      </Card.Body>
    </Card>
  );
};
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
          <input class="btn btn-primary submit grow" type="submit" value="Submit" />
        </div>
      </div>
      <div className="location container">
        <h1 className='location-name'>Locations</h1>
        <div className="offices">
          <div className="row">
            <div className="col-md-6">
              <LocationCard
                title="Hyderabad , HEAD OFFICE"
                address="12th Floor, DSL ABACUS IT PARK , UPPAL, Hyderabad, Telangana, India-500 039"
              />
            </div>
            <div className="col-md-6">
              <LocationCard
                title="Bangalore , BRANCH OFFICE"
                address="House No: 114, 52/1 , 2nd Floor, Krishna Reddy Building , 24th Main Road , HSR Layout, 2nd Sector"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <LocationCard
                title="Kolkata , BRANCH OFFICE"
                address="Balaji Apartment, Kalitala PO, Nawab Ganj, Ichapur , North 24 Paraganas , Kolkatta , West Bengal , India"
              />
            </div>
            <div className="col-md-6">
              <LocationCard
                title="Delhi , BRANCH OFFICE"
                address="House No : 07, Second Floor, Vinoba Puri, Lajpat Nagar-2, New Delhi - 110024"
              />
            </div>
          </div>
          <p>
            <b>Ph : </b>
            <a href="tel:+914027153387">040-27153387 </a>,
            <a href="tel:+919397005115"> 9397005115 </a>,
            <a href="tel:+918800630726"> 8800630726 </a>,
            <a href="tel:+919441234471"> 9441234471 </a>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Contact;