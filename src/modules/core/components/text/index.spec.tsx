import * as React from 'react';
import { Text } from './text.component';
import { shallow } from 'enzyme';

describe('<Text />', () => {
  it('Should render value', () => {
    const result = shallow(<Text value='dsad' />);

    expect(
      result
        .find('input')
        .first()
        .prop('value')
    ).toBe('dsad');
  });
});
