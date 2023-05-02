import { describe, expect, it } from 'vitest';

import numberWithUnits from './index.js';
import { longTestTimeout } from '../../constants/common.js';

const examples = [
  {
    inputs: { text: 'What is the height of Everest in feet' },
    want: { value: 29029, unit: 'feet' },
  },
  {
    inputs: { text: 'What is my age in years' },
    want: { value: undefined, unit: 'years' },
  },
];

describe('Number with units verblet', () => {
  examples.forEach((example) => {
    it(
      example.inputs.text,
      async () => {
        const result = await numberWithUnits(example.inputs.text);

        if (example.want.value) {
          expect(result?.value).toStrictEqual(example.want.value);
        }
        if (example.want.unit) {
          expect(result?.unit).toStrictEqual(example.want.unit);
        }
      },
      longTestTimeout
    );
  });
});
