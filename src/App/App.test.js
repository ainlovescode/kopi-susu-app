import { render} from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const {container} = render(<App />);
  
  const logo = container.getElementsByClassName('App-logo');

  expect(logo.length).toBe(1);
});
