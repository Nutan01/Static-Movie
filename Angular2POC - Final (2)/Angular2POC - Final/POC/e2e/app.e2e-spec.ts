import { POCPage } from './app.po';
import { fackbakend } from './fakebackend.movie';
describe('poc App', () => {
  let page: POCPage;
var loginURL;
  beforeEach(() => {
    page = new POCPage();
  });

  //login
   it('should accept a valid email address and password', function() {
     page.navigateTo();
         expect(page.login()).not.toEqual(loginURL);
  });

  //get list

it('should get mname list', function() {
        for (var i = 0; i < fackbakend.length; ++i) {
  expect(page.getTitle().get(i).getText()).toEqual(fackbakend[i].title.valueOf()); // note, the i is no longer in a `then` function and take the correct values.
}
  });

// search filter
// it('should search Title', function() {
//     expect(page.searchTitle()).toBeTruthy();
//   });

  //sort filter
  // it('should sort sortbyTitle', function() {
  //   expect(page.sortbyTitle()).toBeTruthy();
  // });

// it('should sort sortbyrating', function() {
//     expect(page.sortbyrating()).toBeTruthy();
//   });

//Add  Functionality

// it('should add list', function() {
//   expect(page.addList()).toBeTruthy(); 
// });

// it('should add by popup ', function() {    
//   expect(page.addListByPopUp()).toBeTruthy(); 
//   });

//Edit Functionality

// it('should edit list', function() { 
//   expect(page.editList()).toBeTruthy(); // note, the i is no longer in a `then` function and take the correct values.
// });

// it('should edit by popup ', function() {    
//   expect(page.editListByPopUp()).toBeTruthy(); // note, the i is no longer in a `then` function and take the correct values.
//   });

//Delete Functionality

// it('should click on delete button', function() {
//   expect(page.deleteclick()).toBeTruthy(); 
//   });

// it('should delete by popup ', function() { 
//   expect(page.deleteListByPopUp()).toBeTruthy(); 
//   });


//logout
// it('should logout', function() {
//     expect(page.logout()).toBeTruthy();
//   });

  // it('should display welcome message', () => {
  //   page.navigateTo();
  //   expect(page.getParagraphText()).toEqual('Welcome to app!!');
  // });
});
