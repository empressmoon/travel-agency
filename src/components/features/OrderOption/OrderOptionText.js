import React from 'react';
import PropTypes from 'prop-types';

const  OrderOptionText = ({currentValue, setOptionValue}) => (
  <div>
    <input
      type='text'
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
  </div>
);

OrderOptionText.propTypes = {
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
};

export default OrderOptionText;
