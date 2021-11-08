module.exports = {
  url: 'https://planit.infotrack.com.au',
  elements: {
    startHere: {
        selector: "(//a[text()='Start here'])[1]",
          locateStrategy: 'xpath'},
    header: {
        selector: "//a[text()='SimpleSite.com']",
        locateStrategy: 'xpath'},
    headingText: {
        selector:`//h1[contains(text(),'Create')]`,
          locateStrategy: 'xpath'},
    Username: {
            selector:`/html/body/div/div[2]/div/div/div[2]/form/div[1]/div[2]/span/input`,
              locateStrategy: 'xpath'}
          
  }
  
  //locateStrategy: async function (selector) { return await selector.startsWith('/') ? 'xpath' : 'css selector'; }
  
}