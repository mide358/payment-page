import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
import {
  CardHolder,
  CardNumber,
  CardSecurityCode,
  ValidThruMonth,
  ValidThruYear,
} from 'reactjs-credit-card/form';
import Card from 'reactjs-credit-card/card';

import visa from './assets/visa.png';
import discover from './assets/discover.png';
import master from './assets/master.png';
import cirlce from './assets/circle.png';
import paypal from './assets/paypal.png';

const Payment = () => {
  return (
    <div className="pay">
      <div className="line"></div>

      <div className="payment-info">
        <div className="card-shape">
          <div className="card-info">
            <h3>Payment information</h3>
            <p>Choose your method of payment.</p>
          </div>
          <Card fixClass="fix-new" cardClass="card-new" />
        </div>
        <div className="theForm">
          <div className="card-icons">
            <img src={visa} alt="visa card logo" />
            <img src={discover} alt="discover card logo" />
            <img src={master} alt="master card logo" />
            <img src={cirlce} alt="grey circle" id="grey" />
            <img src={paypal} alt="paypal logo" id="paypal" />
          </div>
          <div className="form-div">
            <Form>
              <Row className="card-row">
                <Col>
                  <label htmlFor="card Number">Credit Card Number </label>
                  <br />
                  <CardNumber id="details" placeholder="Credit Card Number" />
                </Col>

                <Col>
                  <label htmlFor="card Number">Expiration date </label> <br />
                  <ValidThruMonth id="date" />
                  <ValidThruYear id="date" />
                </Col>
              </Row>
              <Row className="card-row">
                <Col>
                  <label htmlFor="card Number">Security code </label> <br />
                  <CardSecurityCode
                    placeholder="CVV"
                    className="input-text semi"
                    id="details"
                  />
                </Col>
                <Col>
                  <label htmlFor="card Number">Card Name </label> <br />
                  <CardHolder
                    placeholder="Card Name"
                    className="input-text semi"
                    id="details"
                  />
                </Col>
              </Row>
              <input type="radio" name="ans" value="yes" /> &nbsp;
              <small>Use this card for next time purchase</small>
              <br />
              <div className="card-btn">
                <button>Add Card</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <div className="line-2"></div>

      <div className="total">
        <ul>
          <li>Subtotal</li>
          <li>Estimated TAX</li>
          <li>
            Promotional Code: <span>Z4KXLM9A</span>
          </li>
        </ul>

        <ul className="num">
          <li>₦2,497.00</li>
          <li>₦119.64</li>
          <li>₦-60.00</li>
        </ul>
      </div>

      <div className="line-2"></div>
      <div className="complete">
        <div className="complete-btn">
          <button>Complete payment</button>
        </div>

        <div className="total-amount">
          <h3>TOTAL:₦2,556.64</h3>
        </div>
      </div>
    </div>
  );
};

export default Payment;
