import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';
import {Link} from 'react-router-dom';

describe('Component TripSummary', () => {
  it('should render correct link address', () => {
    const id = 'abc';
    const expectedLink = '/trip/' + id;
    const component = shallow(<TripSummary id={id} />);

    expect(component.find(Link).prop('to')).toEqual(expectedLink);

    console.log(component.debug());
  });

  it('should render correct image', () => {
    const expectedImage = 'image.jpg';
    const expectedAlt = 'alt';
    const component = shallow(<TripSummary image={expectedImage} name={expectedAlt} />);

    expect(component.find('image').prop('src')).toEqual(expectedImage);
    expect(component.find('image').prop('alt')).toEqual(expectedAlt);
  });

  it('should render correct name, cost and days', () => {
    const expectedName = 'Lorem ipsum';
    const expectedCost = '123';
    const expectedDays = 12;
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} />);

    expect(component.find('.title').prop('name')).toEqual(expectedName);
    expect(component.find('.details').prop('days')).toEqual(expectedDays);
    expect(component.find('.details').prop('cost')).toEqual(expectedCost);
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });

  it('should render tags array', () => {
    const expectedTags = ['tag1', 'tag2', 'tag3'];
    const component = shallow(<TripSummary tags={expectedTags} />);

    const firstTag = component.find('.tags span').at(0).text();
    const secondTag = component.find('.tags span').at(1).text();
    const thirdTag = component.find('.tags span').at(2).text();

    expect(firstTag).toEqual(expectedTags[0]);
    expect(secondTag).toEqual(expectedTags[1]);
    expect(thirdTag).toEqual(expectedTags[2]);
  });

  it('should render props tags only if array contains tags', () => {
    const expectedTags = ['tag1', 'tag2', 'tag3'];
    const component = shallow(<TripSummary tags={expectedTags} />);

    const renderedTags = component.find('.tags');
    expect(renderedTags).toBeTruthy();
  });

});
