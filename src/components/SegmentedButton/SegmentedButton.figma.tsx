import figma from '@figma/code-connect';
import React from 'react';
import { SegmentedButton } from './SegmentedButton';

/**
 * Figma Code Connect for SegmentedButton
 * Figma node: https://www.figma.com/design/yfulxIdI8ysNiDrPwMRAWS/Segmented-button?node-id=81-633
 */
figma.connect(
  SegmentedButton,
  'https://www.figma.com/design/yfulxIdI8ysNiDrPwMRAWS/Segmented-button?node-id=81-633',
  {
    sourceUrl:
      'https://github.com/jesusarchangel/b2b/blob/main/src/components/SegmentedButton/SegmentedButton.tsx',
    props: {
      options: figma.nestedProps('.inner component / Button', {
        value: figma.string('Text'),
        label: figma.string('Text'),
      }),
    },
    example: ({ options }) => (
      <SegmentedButton
        options={[
          { value: 'option1', label: 'Button' },
          { value: 'option2', label: 'Button' },
        ]}
        value="option1"
        onChange={(val) => console.log(val)}
      />
    ),
  },
);
