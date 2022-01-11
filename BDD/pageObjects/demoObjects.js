
module.exports = {


  url: 'https://www.wikipedia.org/',
  elements: {
    WikiSearchInput:{
      selector:"//input[contains(@id,'searchInput')]",
      locateStrategy:"xpath"  
    },
    WikiSearchButton:{
      selector:"//i[@class='sprite svg-search-icon']",
      locateStrategy:"xpath"  
    },
    WikiTitleValidation:{
      selector:"//h1[contains(.,'Car')]",
      locateStrategy:"xpath"  
    },
  }
}
