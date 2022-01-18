
/* eslint-disable */


// describe('Navigation', () => {
//   it('should navigate to the about page', () => {
//     // Start from the index page
//     cy.visit('http://localhost:3000/');

//     // Find a link with an href attribute containing "about" and click it
//     cy.get('a[href*="about"]').click();

//     // The new url should include "/about"
//     cy.url().should('include', '/about');

//     // The new page should contain an h1 with "About page"
//     cy.get('h1').contains('About Page');
//   })
// });

describe("points app", function() {
	beforeEach( function() {

	});


	it("home page can be opened" , function(){
		cy.visit("http://localhost:3000");
		cy.contains("TECH ZONE");
		cy.contains("view all products");
		cy.contains("BROWSE");
		cy.contains("ENJOY");
		cy.contains("CHOOSE");
		cy.contains("TECH PRODUCTS");
		cy.contains("view this repository");
		cy.contains("3000");
	});

});



export {};