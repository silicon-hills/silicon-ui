import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  withKnobs,
  text,
  boolean,
  number,
  select
} from '@storybook/addon-knobs';
import Button from './Button';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import withThemesProvider from '../../storybook/withThemesProvider';
import themes from '../themes';
// import docs from './Button.docs.mdx';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemesProvider(themes))
  .addParameters({
    // docs: { page: docs },
    // jest: ['Button.test.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <Button
        backgroundColor={text('backgroundColor', 'primary')}
        borderRadius={number('borderRadius', 0)}
        onClick={action('onClick')}
        onFocus={action('onFocus')}
        onMouseEnter={action('onMouseEnter')}
        onMouseLeave={action('onMouseLeave')}
        onMouseOver={action('onMouseOver')}
        onPress={action('onPress')}
        styled={boolean('styled', false)}
        autoContrast={select<'A' | 'AA' | 'AAA'>(
          'autoContrast',
          {
            false: '' as 'A',
            A: 'A',
            AA: 'AA',
            AAA: 'AAA'
          },
          'AA'
        )}
      >
        {text('children', 'click me')}
      </Button>
    </Wrapper>
  ));
