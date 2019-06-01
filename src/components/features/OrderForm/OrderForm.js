import React from 'react';
import PropTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';
import Button from '../../common/Button/Button';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';
import settings from '../../../data/settings';

const sendOrder = (options, tripCost, tripName, tripId, tripCountry) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    ...options,
    totalCost,
    tripName,
    tripId,
    tripCountry,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

const  OrderForm = props => (
  <Row>
    {pricing.map(pricingData => (
      <Col md={4} key={pricingData.id}>
        <OrderOption {...pricingData} currentValue={props.options[pricingData.id]} setOrderOption={props.setOrderOption} />
      </Col>
    ))}
    <Col xs={12}>
      <OrderSummary tripCost={props.tripCost} options={props.options} />
    </Col>
    <Button disabled={!(props.options.name.length > 0 && props.options.contact.length > 0)} onClick={() => sendOrder(props.options, props.tripCost, props.tripName, props.tripId, props.tripCountry)}>Order now!</Button>
  </Row>
);

OrderForm.propTypes = {
  tripCost: PropTypes.node,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  tripName: PropTypes.string,
  tripId: PropTypes.string,
  tripCountry: PropTypes.string,
};

export default OrderForm;
