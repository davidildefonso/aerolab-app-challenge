export {};

/*
import '@testing-library/jest-dom';
import { render, RenderResult, screen, fireEvent } from '@testing-library/react';
import NavBar from '../components/navbar';
//import { prettyDOM } from '@testing-library/dom';
import {user, getUserPoints} from '../utils/testUtils';

import Home from '../pages/index';

describe("Navbar ", () => {
	const handleClick = jest.fn();
	const navBarComponent: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement>  = 
		render(<NavBar handleClick={handleClick} visible={false}  points={user.points} />);
	
	it("renders the logo and user points", () => {
		
		const logoImage  = screen.getByRole('navbar-logo') ;

		expect(logoImage).toBeInTheDocument();
		const img = navBarComponent.container.querySelector('img');
		if(img){
			expect(img.src).toMatch(/aerolab-logo.svg/);
		}
		
		expect(navBarComponent.container).toHaveTextContent(
			user.points.toString()
		);

		

		expect(logoImage.parentElement).toHaveTextContent(
			'aerolab'
		);

	});


});


describe("navbar menu : ", () => {

	let  HomeComponent: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement> ;

	beforeEach(() => {	
		HomeComponent = render(<Home  user={user}/>);	

	
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

		expect( screen.getByTestId("modal-username").textContent ).toBe(user.name);

	});

	it("hides the menu on a second click of the points container", () => {

		const navbarPointsLogo =  HomeComponent.getByRole("navbar-points-logo");
		fireEvent.click(navbarPointsLogo);
		fireEvent.click(navbarPointsLogo);	

		const modalContainer = HomeComponent.container.querySelector(".nav-menu-container");
		expect(modalContainer).toHaveClass("hidden");
	});




	it("adds points to the user", () => {
		const initialPoints = getUserPoints();
		const navPoints= HomeComponent.getByTestId("points-nav");
		const addPointsElement = HomeComponent.getByText("Add Points");

		expect(navPoints).toBeDefined();		
		expect(navPoints.textContent).toBe(initialPoints.toString());

		let pointsElement = HomeComponent.getByTestId("points-to-add-one");
		expect(pointsElement).toBeDefined();
		fireEvent.click(pointsElement);
		fireEvent.click(addPointsElement);	
		expect(HomeComponent.getByTestId("points-nav").textContent).toBe((initialPoints + 5000).toString());

		pointsElement = HomeComponent.getByTestId("points-to-add-two");
		expect(pointsElement).toBeDefined();
		fireEvent.click(pointsElement);
		fireEvent.click(addPointsElement);
		expect(HomeComponent.getByTestId("points-nav").textContent).toBe((initialPoints + 6000).toString());

		pointsElement = HomeComponent.getByTestId("points-to-add-three");
		expect(pointsElement).toBeDefined();
		fireEvent.click(pointsElement);
		fireEvent.click(addPointsElement);
		expect(HomeComponent.getByTestId("points-nav").textContent).toBe((initialPoints + 13500).toString());


	});

});


*/