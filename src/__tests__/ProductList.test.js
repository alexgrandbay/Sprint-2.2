// src/__tests__/ProductList.test.js
import React from 'react';
import { render } from '@testing-library/react';
import ProductList from '../components/ProductList';

test('renders product list', () => {
  const { getByText } = render(<ProductList />);
  const productListTitle = getByText(/products/i);
  expect(productListTitle).toBeInTheDocument();
});
