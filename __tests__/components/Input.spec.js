import React from 'react';
import renderer from 'react-test-renderer';

import Input from '../../src/components/Input';
import { options } from '../options';

const props = {
  props: {
    inputRenderer: null
  },
  state: {
    values: options
  },
  methods: {
    getInputSize: () => undefined
  }
};

it('<Input/> renders correctly', () => {
  const tree = renderer.create(<Input {...props}/>).toJSON();

  expect(tree).toMatchSnapshot();
});
