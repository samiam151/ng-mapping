const fs = require('fs')

const reutersData = require('./_services').ReutersDataService
const compare = require('./_services').CompareService

const dataUrl = "../src/assets/data.json"

fs.readFile(dataUrl, (err, data) => {
    let businessesJson = JSON.parse(data.toString())
    let reutersActivities = reutersData.getReutersActivites()
    let reutersIndustryGroups = reutersData.getReutersIndustryGroups()
        
    {
        // Comparing the business description to the Reuters activity descriptions
        let business = businessesJson[0];
        
        reutersIndustryGroups.forEach((igroup, index) => {
            let igroupWords = compare.breakIntoWords(igroup.name),
                businessDescriptionWords = compare.breakIntoWords(business.info.Description.toLowerCase());
            
            console.log('_________________________________________________\n')
            console.log(igroupWords)
            console.log(businessDescriptionWords)
        })
    }

})
