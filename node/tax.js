const fs = require('fs')
const reuters = require('thomson-reuters-trbc')
const btr = require('./breakTaxonomyRoot')

const dataUrl = "C:/Projects/ng-map/src/assets/data.json"

fs.readFile(dataUrl, (err, data) => {
    let businesses = JSON.parse(data.toString()),
        taxonomyRoot = reuters.all(),
        businessTree = btr.makeTree(taxonomyRoot);
})