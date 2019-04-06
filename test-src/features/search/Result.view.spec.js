import React from 'react';
import { shallow } from 'enzyme';

import { Result } from '@/features/search/views/Result.view';

describe(`Result test`, function() {
  it('should trigger on click', function() {
    const result = { id: 1, album: 'Live at Pompeii', artist: 'David Gilmour' };
    const itemClick = jest.fn();
    const itemClickWithProp = itemClick.bind(null, {
      preventDefault: () => {}
    });
    const wrapper = shallow(<Result album='Live at Pompeii' artist='David Gilmour' />);

    wrapper.simulate('click');

    expect(itemClick).toBeCalledWith(result);
  });
});
