import React from 'react';

import { renderWithTheme, theme } from '../../../test/utils';

import Fieldset from './Fieldset';

describe('<Fieldset />', () => {
  it('renders', () => {
    const { container } = renderWithTheme(<Fieldset />);
    const fieldset = container.firstChild;

    expect(fieldset).toBeInTheDocument();
  });
  it('renders children', () => {
    const textContent = 'Hi there!';
    const { getByText } = renderWithTheme(
      <Fieldset>
        <span>{textContent}</span>
      </Fieldset>
    );
    expect(getByText(textContent)).toBeInTheDocument();
  });

  describe('prop: label', () => {
    it('renders', () => {
      const labelText = 'Name:';
      const { container } = renderWithTheme(<Fieldset label={labelText} />);
      const fieldset = container.firstChild;
      const legend = fieldset.querySelector('legend');
      expect(legend.textContent).toBe(labelText);
    });
    it('when not provided, <legend /> element is not rendered', () => {
      const { container } = renderWithTheme(<Fieldset />);
      const fieldset = container.firstChild;
      const legend = fieldset.querySelector('legend');
      expect(legend).not.toBeInTheDocument();
    });
  });
  describe('prop: disabled', () => {
    it('renders with disabled text content', () => {
      const { container } = renderWithTheme(<Fieldset disabled />);
      const fieldset = container.firstChild;

      expect(fieldset).toHaveStyleRule('color', theme.textDisabled);
      expect(fieldset).toHaveStyleRule(
        'text-shadow',
        `1px 1px ${theme.textDisabledShadow}`
      );
    });
  });
});
