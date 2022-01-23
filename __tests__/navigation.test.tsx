import '@testing-library/jest-dom';
import { render, RenderResult, screen, fireEvent } from '@testing-library/react';
import NavBar from '../components/navbar';
//import { prettyDOM } from '@testing-library/dom';

import Home from '../pages/index';

describe("Navbar ", () => {
	const handleClick = jest.fn();
	const navBarComponent: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement>  = render(<NavBar handleClick={handleClick} visible={false} />);
	
	it("renders the logo and user points", () => {
		
		const logoImage  = screen.getByRole('navbar-logo') ;

		expect(logoImage).toBeInTheDocument();
		const img = navBarComponent.container.querySelector('img');
		if(img){
			expect(img.src).toMatch(/aerolab-logo.svg/);
		}
		
		expect(navBarComponent.container).toHaveTextContent(
			'3000'
		);

		

		expect(logoImage.parentElement).toHaveTextContent(
			'aerolab'
		);

	});


});


describe("navbar menu : ", () => {

	let  HomeComponent: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement> ;

	beforeEach(() => {	
		HomeComponent = render(<Home/>);	

	
	});

	it("does not render the menu by default", () => {
		const modalContainer = HomeComponent.container.querySelector(".nav-menu-container");
		expect(modalContainer).toHaveClass("hidden");
	});


	it("renders the menu when click on the points container", () => {

		const navbarPointsLogo =  HomeComponent.getByRole("navbar-points-logo");
		fireEvent.click(navbarPointsLogo);

	

		const modalContainer = HomeComponent.container.querySelector(".nav-menu-container");
		expect(modalContainer).not.toHaveClass("hidden");

	});

	it("hides the menu on a second click of the points container", () => {

		const navbarPointsLogo =  HomeComponent.getByRole("navbar-points-logo");
		fireEvent.click(navbarPointsLogo);
		fireEvent.click(navbarPointsLogo);	

		const modalContainer = HomeComponent.container.querySelector(".nav-menu-container");
		expect(modalContainer).toHaveClass("hidden");
	});

});