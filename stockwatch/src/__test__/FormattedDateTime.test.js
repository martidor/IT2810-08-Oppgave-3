import React from 'react';
import {shallow} from 'enzyme';
import { FormattedDate, FormattedTime } from 'react-intl';
import FormattedDateTime from '../components/format/FormattedDateTime';

describe('FormattedDateTime', () => {
  it('Shows the time if the date is today and it is a share', () => {
  	const date = new Date().getTime();
    const formattedDateTime = shallow(<FormattedDateTime timestamp={date} type="SHARES" />);

    expect(formattedDateTime.find(FormattedTime).length).toBe(1);
  });

  it('Shows a date if the date is today and it is a fund', () => {
  	const date = new Date().getTime();
    const formattedDateTime = shallow(<FormattedDateTime timestamp={date} type="FUNDS" />);

    expect(formattedDateTime.find(FormattedDate).length).toBe(1);
  });

  it('Shows a date if the date is tomorrow and it is a share', () => {
  	const date = new Date().getTime() + (1000 * 60 * 60 * 24);
    const formattedDateTime = shallow(<FormattedDateTime timestamp={date} type="SHARES" />);

    expect(formattedDateTime.find(FormattedDate).length).toBe(1);
  });

  it('Shows a date if the date is tomorrow and it is a fund', () => {
  	const date = new Date().getTime() + (1000 * 60 * 60 * 24);
    const formattedDateTime = shallow(<FormattedDateTime timestamp={date} type="FUNDS" />);

    expect(formattedDateTime.find(FormattedDate).length).toBe(1);
  });
});
