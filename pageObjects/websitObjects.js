module.exports = {
    url: 'https://www.one.com/en/websitebuilder/',
    elements: {
      logo: "div.Logo a[title]",
      searchBox: "div.DomainSearch input.inputDomainSearch"
    }
    
    //locateStrategy: async function (selector) { return await selector.startsWith('/') ? 'xpath' : 'css selector'; }
    
}
