import React from 'react'
import { Provider } from 'react-redux'
import { render, cleanup } from '@testing-library/react';
import App from './App';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';
import userEvent from '@testing-library/user-event';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('0')).toBeInTheDocument();
  });
  test('a click in a button should increment the value of clicks', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 5}}});

    expect(queryByText('5')).toBeInTheDocument();
  });
  test('a click in a button should increment the value of clicks initial value 10', () => {
    const { queryByText } = renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10}}});

    expect(queryByText('10')).toBeInTheDocument();
  });
  test('the page should has a button and with a click the text has to be 1', () => {
    const { queryByText } = renderWithRedux(<App />);
    const buttonAdicionar = queryByText('Clique aqui');
    userEvent.click(buttonAdicionar)

    expect(buttonAdicionar).toBeInTheDocument();
    expect(queryByText('1')).toBeInTheDocument();
  });
});