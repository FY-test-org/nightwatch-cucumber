
// sample commands to that will actually exeute the steps the need to run during the test.
let commands = {

    Homepagenavigate :function() {
        this.navigate.url()
    },
    SearchItem: function(){
        this.click("@EnglishTab")

    },
    LanguageOption:function(){

    }


}


module.exports = {
    // selectors where you can 

    commands: [commands],
    url: '',
        elements: {
        startHere: {
          selector: "Sample Selector",
          locateStrategy: 'xpath'},

          EnglishTab: {
            selector: "//strong[contains(.,'English')]",
            locateStrategy: 'xpath'
        },
        Searchfield: {
            selector:"//input[contains(@id,'searchInput')]",
            locateStrategy: 'xpath'
        },
        startHere: {
            selector: "Sample Selector",
            locateStrategy: 'xpath'},
        startHere: {
            selector: "Sample Selector",
            locateStrategy: 'xpath'},
    }

    //locateStrategy: async function (selector) { return await selector.startsWith('/') ? 'xpath' : 'css selector'; }

    }