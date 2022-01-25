import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import Home from '../pages/index';
import {user} from '../utils/testUtils';



describe('Home', () => {

	it('renders correctly',  () => {

		const homeComponent = render(<Home  user={user}  />);	
		expect(homeComponent).toBeDefined();
		expect(homeComponent.getByTestId("points-nav").textContent).toBe(user.points.toString());
		expect(homeComponent.getByTestId("modal-username").textContent).toBe(user.name);

	});
});

it('renders homepage unchanged', () => {
  const { container } = render(<Home user={user}/>);
  expect(container).toBeDefined();
	
});