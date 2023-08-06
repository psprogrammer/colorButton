import { render, screen, fireEvent } from '@testing-library/react';
//  import { logRoles } from '@testing-library/dom';
import App from './App';

test('button has correct initial color, and updates when clicked ', () => {
  //  const {container} = 
  render(<App></App>);
  //  logRoles(container);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' }); // name is options and text of the button is CTB
  expect(colorButton).toHaveStyle({ backgroundColor: 'red' })
});


test('button turns blue when clicked ', () => {
  render(<App />);
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  fireEvent.click(colorButton);
  expect(colorButton).toHaveStyle({ backgroundColor: 'blue' });
  expect(colorButton).toHaveTextContent('Change to red');
}); // its empty so no errors thrown


// we write our test before the actual funtionality 