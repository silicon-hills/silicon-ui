import React from 'react';
import {
  withKnobs,
  text,
  number,
  select,
  boolean
} from '@storybook/addon-knobs';
import { Container, Header, Content, Form, Item, Picker } from 'native-base';

import DropdownSelect from './DropdownSelect';
import DropdownOption from '../DropdownOption/DropdownOption';
import Wrapper from '../../storybook/Wrapper';
import storiesOf from '../../storybook/storiesOf';
import themes from '../themes';
import withThemesProvider from '../../storybook/withThemesProvider';
import { Alert } from 'react-native';
import { action } from '@storybook/addon-actions';

storiesOf('Dropdown', module)
  .addDecorator(withKnobs)
  .addDecorator(withThemesProvider(themes))
  .addParameters({
    // docs: { page: docs },
    // jest: ['Button.test.tsx']
  })
  .add('with knobs', () => (
    <Wrapper>
      <DropdownSelect
        // multiple={boolean('multiple', false)}
        disabled={boolean('disabled', false)}
        onPress={action('onPress')}
        selectedValue={text('selectedValue', '')}
        backgroundColor={select(
          'backgroundColor',
          [
            'inverseText',
            'primary',
            'secondary',
            '#ADFF2F',
            '#E5FFCC',
            '#CCFFE5'
          ],
          'inverseText'
        )}
        name={text('dropdown-name', '')}
        required={boolean('required', false)}
        autofocus={boolean('autofocus', false)}
        label={text('dropdown-label', 'choose one')}
        fontFamily={select(
          'font-family',
          ['Times New Roman', 'Arial', 'Helvetica', ' sans-serif'],
          'Times New Roman'
        )}
        fontWeight={text('font-weight', 'bold')}
        fontSize={number('fon-size', 2)}
        lineHeight={text('line-height', '')}
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
        // selectedValue="Saab"
      >
        <DropdownOption value="Tesla" label="Tesla">
          Tesla
        </DropdownOption>
        <DropdownOption value="Volvo" label="Volvo">
          Volvo
        </DropdownOption>
        <DropdownOption value="Saab" label="Saab">
          Saab
        </DropdownOption>
        <DropdownOption value="Mercedes" label="Mercedes">
          Mercedes
        </DropdownOption>
        <DropdownOption value="Audi" label="Audi">
          Audi
        </DropdownOption>
      </DropdownSelect>
    </Wrapper>
  ));
