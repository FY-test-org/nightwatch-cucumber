

// sample commands to that will actually exeute the steps the need to run during the test.
let commands = {

    navigatePage :function() {
   


    },

    EnterItem :function(){
        this.setValue("@Searchbar", 'Cars')

    },
    SearchAction :function(){
        this.click('@SearchBtn')
    },

    ValidationStep: function(){
        console.log("validation")
    }
}


module.exports = {
  url: 'https://planit.infotrack.com.au',

    // selectors from the webpage you want to test can go here. 

        elements: {
        Searchbar: {
          selector: "//input[contains(@id,'searchInput')]",
          locateStrategy: 'xpath'
        },
    
    SearchBtn: {
        selector: "//button[@type='submit']",
        locateStrategy: 'xpath'},
  },

}

    //locateStrategy: async function (selector) { return await selector.startsWith('/') ? 'xpath' : 'css selector'; }

    