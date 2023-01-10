module.exports = {
    url: 'https://www.simplesite.com/',
    elements: {
      subpageTitle: "span.subpage-hero-title-strong",
      languageButton: "div.currentlanguagemobile",
      langMenu: "div.lang-menu div.mobile-menu",
      searchButton: "button#button-submit-domainsearch",
      header: {
          selector: "//div[@class='Logo']//a[@title]",
          locateStrategy: 'xpath'},
      headingText: {
          selector:`//h1[contains(text(),'Create')]`,
            locateStrategy: 'xpath'}
    }
    
    //locateStrategy: async function (selector) { return await selector.startsWith('/') ? 'xpath' : 'css selector'; }
    
}
