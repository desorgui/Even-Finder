import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';
import store from '../../redux/configureStore';
import Events from '../Events';

function renderWithProviders(
  ui,
  {
    storetest = store,
    ...renderOptions
  } = {},
) {
    function Wrapper({ children }) { // eslint-disable-line
    return <Provider store={storetest}>{children}</Provider>;
  }
  return { storetest, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}

test('Data should be displayed in document on render', async () => {
  renderWithProviders(<Events />);

  expect(screen.getByText('List of Events')).toBeInTheDocument();
});

test(' Test the snapshot', () => {
  expect(screen.debug()).toMatchSnapshot();
});
