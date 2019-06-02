import React from 'react';
import PropTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice';
import styles from './OrderOption.scss';

import Icon from '../../common/Icon/Icon';

const  OrderOptionIcons = ({values, setOptionValue, required, currentValue}) => (
  <section
    className={styles.icon}
    value={currentValue}
  >
    {required ? '' :
      <div
        className={`styles.icon ${currentValue == '' ? styles.iconActive : ''}`}
        key='null'
        value=''
        onClick={() => setOptionValue('')}
      >
        <Icon name={'times-circle'}>none</Icon></div>}
    {values.map(value => (
      <div
        key={value.id}
        value={value.id}
        className={`styles.icon ${currentValue == value.id ? styles.iconActive : ''}`}
        onClick={() => setOptionValue(value.id)}
      >
        <Icon name={value.icon}>{value.name} ({formatPrice(value.price)})</Icon>
      </div>
    ))}
  </section>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.bool,
  currentValue: PropTypes.node,
  setOptionValue: PropTypes.func,
  icon: PropTypes.string,
};

export default OrderOptionIcons;
