module.exports = {

        elements: {
            locSaveAssignBtn:{
                selector:'/html/body/div[2]/div/div/div[2]/div/div[1]/button',
                locateStrategy:'xpath'
            },
            locSelectAllBtn:{
                selector:'/html/body/div[2]/div/div/div[2]/div/div[1]/div/button[1]',
                locateStrategy:'xpath'
            },
            locAssignPartyBtn:{
                selector:'//*[@id="root"]/div[2]/div[1]/div/div/div[2]/div/div[1]/div/div[2]/div/div/div/div[2]/table/tbody/tr/td[4]/button',
                locateStrategy:'xpath'
            },
            locAddPartytBtn:{
                selector:'//*[@id="root"]/div[2]/div[1]/div/div/div[2]/div/div[1]/div/div[2]/div/div/div/div[2]/div[3]/div/div/div[1]/i',
                locateStrategy:'xpath'
            },
            locAssignPartiesToProjectBtn:{
                selector:'//*[@id="root"]/div[2]/div[1]/div/div/div[2]/div/div[1]/div/div[2]/div/div/div/div[2]/table/tbody/tr/td[3]/div/button[2]',
                locateStrategy:'xpath'
            },
            locSearchAgentField:{
                selector:'//*[@id="root"]/div[2]/div[1]/div/div/div[2]/div/div[1]/div/div[2]/div/div/div/div[2]/table/tbody/tr/td[1]/div/input',
                locateStrategy:'xpath'
            },
            LocParties:{
                selector:'//*[@id="top-nav-parties-button"]/button',
                locateStrategy:'xpath'
            }, 
            LocSubmitBtn:{
                selector:'//*[@id="root"]/div[2]/div[1]/div/div/div[2]/div/div/div[2]/div/div/div/div[2]/div/div[2]/form/div[8]/button[1]',
                locateStrategy:'xpath'
            }, 
            LocPortalUserVendorAgentRole:{
                selector:'//*[@id="root"]/div[2]/div[1]/div/div/div[2]/div/div/div[2]/div/div/div/div[2]/div/div[2]/form/div[3]/div/div/div/select/option[2]',
                locateStrategy:'xpath'
            }, 
            LocPortalUserRole:{
                selector:'//*[@id="root"]/div[2]/div[1]/div/div/div[2]/div/div/div[2]/div/div/div/div[2]/div/div[2]/form/div[3]/div/div/div/select',
                locateStrategy:'xpath'
            },
    
            LocPortalUserOrgnisationName:{
                selector:'//*[@id="root"]/div[2]/div[1]/div/div/div[2]/div/div/div[2]/div/div/div/div[2]/div/div[2]/form/div[5]/div/div/div/input',
                locateStrategy:'xpath'
            },
            LocPortalUserName:{
                selector:'//*[@id="root"]/div[2]/div[1]/div/div/div[2]/div/div/div[2]/div/div/div/div[2]/div/div[2]/form/div[2]/div/div/div/input',
                locateStrategy:'xpath'
            },
    
          
    
            LocPortalContact:{
                selector:'//*[@id="root"]/div[2]/div[1]/div/div/div[2]/div/div/div[2]/div/div/div/div[2]/div/div[2]/form/div[6]/div/div/div/input',
                locateStrategy:'xpath'
            },
        
            LocPortalPassword:{
                selector:'//*[@id="root"]/div[2]/div[1]/div/div/div[2]/div/div/div[2]/div/div/div/div[2]/div/div[2]/form/div[7]/div[1]/div/div/div/input',
                locateStrategy:'xpath'
            },
    
            LocPortalPasswordConfirm:{
                selector:'//*[@id="root"]/div[2]/div[1]/div/div/div[2]/div/div/div[2]/div/div/div/div[2]/div/div[2]/form/div[7]/div[2]/div/div/div/input',
                locateStrategy:'xpath'
            },
            LocPortalUserEmail:{
                selector:'//*[@id="root"]/div[2]/div[1]/div/div/div[2]/div/div/div[2]/div/div/div/div[2]/div/div[2]/form/div[1]/div/div/div/input',
                locateStrategy:'xpath'
            },
    
            locPortalAccessBtn:{
                selector:"//button[@class='css-1cxcw0r'][contains(.,'Portal Access')]",
                locateStrategy:'xpath'
            },
            locVicStateOption: {
                selector:"//select[@name='state']",
                locateStrategy:'xpath'
            },
            locAccountName: {
                selector:"//span[contains(.,'planit.integration.tests')]",
                locateStrategy:'xpath'
            },
      
            locNewProjectSubmit: {
            selector:"//button[@id='submit-project-button']",
            locateStrategy:'xpath'
        },
    
            locNewProjectSubmit: {
                selector:"//button[@id='submit-project-button']",
                locateStrategy:'xpath'
            },
            locMatterNumberInput: {
                selector:"//input[contains(@id,'project-matter')]",
                locateStrategy:'xpath'
            },
        // For VIC test this will need to be toggled for VIC drop down
        //     locStateOptionSelector: {
        //     selector:"//select[contains(@id,'48b90bb0-fed4-11ea-b082-d5ae91d80441')]",
        //     locateStrategy:'xpath'
        // },
            locAddress: {
                selector:"//input[@id='project-address']",
                locateStrategy:'xpath'
            },
            locLotNumbers: {
                selector:"(//input[contains(@type,'text')])[4]",
                locateStrategy:'xpath'
            },
            locNewProjectName: {
                selector:"//input[@id='project-name']",
                locateStrategy:'xpath'
            },
            locNewProjectBtn: {
                selector: "//button[@id='new-project-button']",
                locateStrategy: 'xpath'
            },
            locPlanITLogo: {
                selector: "//img[@src='https://planit-assets-prod.s3.amazonaws.com/client/1.0.488/images/logo-topnav.png']",
                locateStrategy: 'xpath'
            },
            locPlanITSearch: {
                selector: "/html/body/div/div[2]/div[1]/div/div/div[1]/div/div[1]/div[2]/span/span/input",
                locateStrategy: 'xpath'
            },
            locaPlanITOption: {
                selector: "/html/body/div/div[2]/div[1]/div/div/div[1]/div/div[3]/div[2]",
                locateStrategy: 'xpath'
            },
            locPlanITSearchSelect: {
                selector: "(//i[@class='material-icons  css-1iyfzax'][contains(.,'chevron_right')])[1]",
                locateStrategy: 'xpath'
            },
            locProjectID: {
                selector: "(//div[contains(.,'TestingPLanITNSW')])[6]",
                locateStrategy: 'xpath'
            },

    }

    //locateStrategy: async function (selector) { return await selector.startsWith('/') ? 'xpath' : 'css selector'; }

    }