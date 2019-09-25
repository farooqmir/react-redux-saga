// Centralized propType definitions
import { shape, number, string, oneOfType } from 'prop-types';

export const Example = shape({
  prop1: oneOfType([number,string]),
  prop2: oneOfType([number,string])
});

export const savings = shape({
  prop1: oneOfType([number,string]),
  prop2: oneOfType([number,string])
});
