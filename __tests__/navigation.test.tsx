import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import NavBar from '../components/navbar';
import { prettyDOM } from '@testing-library/dom';

describe("Navbar ", () => {
	it("renders the logo and user points", () => {
		const component = render(<NavBar/>);
		const logoImage  = screen.getByRole('img', {
			name: /logo-image/,
		}) ;

		expect(logoImage).toBeInTheDocument();
		const img = component.container.querySelector('img');
		if(img){
			expect(img.src).toMatch(/aerolab-logo.svg/);
		}
		
		expect(component.container).toHaveTextContent(
			'3000'
		);

		if(logoImage.parentElement){
			console.log(prettyDOM(logoImage.parentElement));
		}

		

		expect(logoImage.parentElement).toHaveTextContent(
			'aerolab'
		);

	});
});