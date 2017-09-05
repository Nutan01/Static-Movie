import { browser, by, element,protractor } from 'protractor';

export class POCPage {
  navigateTo() {
    return browser.get('/');
  }

//login test case

  login(){
    browser.ignoreSynchronization=true;
     var loginURL;
  var email = element(by.name('username'));
  var password = element(by.name('password'));
  var loginButton = element(by.name('clickme'));
   email.clear();
    password.clear();

    email.sendKeys('nutan');
    password.sendKeys('nutan');
    loginButton.click();
    browser.driver.sleep(8000);
     return browser.getCurrentUrl();
  }

  //get list

  getTitle()
{
  let list= element.all(by.css('table tbody tr'));
 return list;

}
  
 //filter test case
 
//search title
searchTitle(){
    var search = element(by.name('searchtilte')).sendKeys('It');
  var EC = protractor.ExpectedConditions;
  var id = element(by.name('Logout'));
  browser.wait(EC.visibilityOf(id), 500000);
 browser.driver.sleep(5000);
  return true;
}

//sortbyTitle 
sortbyTitle(){
    var EC = protractor.ExpectedConditions;
    var titles = element(by.name('titles'));
  browser.wait(EC.visibilityOf(titles), 50000);
    titles.click();
     browser.driver.sleep(5000);
      return true;
}

//sortbyrating 
sortbyrating(){
    var rating = element(by.name('ratings')).click();
  var EC = protractor.ExpectedConditions;
    browser.driver.sleep(5000);
  return true;
}

//add test case

addList()
{
 var EC = protractor.ExpectedConditions;
 let index= element.all(by.name('addmovie')).click();
 return true;
}

addListByPopUp()
{
 // let index= element.all(by.id('btnYes'));
var EC = protractor.ExpectedConditions;

  var title = element(by.name('title'));
  browser.wait(EC.visibilityOf(title), 50000);
  title.clear();
   title.sendKeys('Dabang');

  var rating = element(by.name('rating'));
  browser.wait(EC.visibilityOf(rating), 50000);
   rating.clear();
    rating.sendKeys('4');
 
  var add = element(by.name('addm'));
  browser.wait(EC.visibilityOf(add), 50000);
   add.click();
   browser.driver.sleep(5000);
 return true;
}

//Edit test case

editList()
{
 let index= element.all(by.id('editm')).get(2).click();
  return true;
}

editListByPopUp()
{
var EC = protractor.ExpectedConditions;

  var title = element(by.name('mtitle'));
  browser.wait(EC.visibilityOf(title), 50000);
  title.clear();
   title.sendKeys('Kabali');

  var rating = element(by.name('mrating'));
  browser.wait(EC.visibilityOf(rating), 50000);
   rating.clear();
    rating.sendKeys('2');
 
  var edit = element(by.id('mvedit'));
  browser.wait(EC.visibilityOf(edit), 50000);
   edit.click();
    browser.driver.sleep(5000);
 return true;
}

//Delete test case

deleteclick()
{
 let index= element.all(by.id('delete')).get(2).click();
return true;
}

deleteListByPopUp()
{
var EC = protractor.ExpectedConditions;
var yesDelete = element(by.id('yesDelete'));
browser.wait(EC.visibilityOf(yesDelete), 50000);
yesDelete.click();
 browser.driver.sleep(5000);
 return true;
}










//Logout
logout()
{
  element(by.name('Logout')).click();
          return  true;
}
  // getParagraphText() {
  //   return element(by.css('app-root h1')).getText();
  // }
}
