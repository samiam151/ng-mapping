const fs = require('fs')
const reuters = require('thomson-reuters-trbc')

const dataUrl = "C:/Projects/ng-map/src/assets/data.json"

fs.readFile(dataUrl, (err, data) => {
    let businesses = JSON.parse(data.toString())
    console.log(reuters.all())

    // businesses.forEach(business => {

    // })
})