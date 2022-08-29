import { render, screen} from '@testing-library/react';
import Form from './Form';

var Strings = require('../constants/strings')

test('renders form elements', () => {
  render(<Form />);
  
  const title = screen.getAllByText(Strings.form_title);

  const nameLabel = screen.getAllByText(Strings.customer_name_label);
  const nameField = screen.getByTestId(Strings.customer_name_field_id)
  
  const sizeLabel = screen.getAllByText(Strings.size_label);
  const sizeField = screen.getByTestId(Strings.size_field_id)

  const flavorLabel = screen.getAllByText("Flavor");
  const flavorField = screen.getByTestId("flavor")

  const submitButton = screen.getByTestId("submit")

  expect(title[0]).toBeTruthy();
  expect(nameLabel[0]).toBeTruthy();
  expect(nameField).toBeTruthy();
  expect(sizeLabel[0]).toBeTruthy();
  expect(sizeField).toBeTruthy();
  expect(flavorLabel[0]).toBeTruthy();
  expect(flavorField).toBeTruthy();
  expect(submitButton).toBeTruthy()
});