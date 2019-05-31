import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class OrderOptionDate extends React.Component {
  static propTypes = {
    startDate: PropTypes.instanceOf(Date),
    setOptionValue: PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(date) {
    this.setState({
      startDate: date,
    });
    this.props.setOptionValue(date.toISOString().slice(0, 10));
  }

  render() {
    return (
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
        minDate={this.state.startDate}
        dateFormat="d MMMM, yyyy"
      />
    );
  }
}

export default OrderOptionDate;
