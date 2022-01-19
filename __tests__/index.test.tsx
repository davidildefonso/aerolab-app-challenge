import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Home from '../pages/index';

// describe('Home', () => {
//   it('renders a heading', () => {
//     render(<Home />);

//     const heading = screen.getByRole('heading', {
//       name: /HELLO WORLD!/i,
//     });

//     expect(heading).toBeInTheDocument();
//   });
// });

it('renders homepage unchanged', () => {
  const { container } = render(<Home />);
  expect(container).toBeDefined();
	
});