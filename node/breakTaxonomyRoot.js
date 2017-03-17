function makeTree(reutersData) {
    let keys = Object.keys(reutersData)
    let separations = separate(keys, reutersData);
    
    return separations;
}

function separate(keys, reutersData){
    let businessTree = {};
        businessTree['esectors'] = [],
        businessTree['bsectors'] = [],
        businessTree['industryGroups'] = [],
        businessTree['industries'] = [],
        businessTree['activities'] = [];

    keys.forEach(key => {
        let group = reutersData[key]
        if (group.type === "Economic Sector"){ businessTree.esectors.push(group) }
        if (group.type === "Business Sector"){ businessTree.bsectors.push(group) }
        if (group.type === "Industry Group"){ businessTree.industryGroups.push(group) }
        if (group.type === "Industry"){ businessTree.industries.push(group) }
        if (group.type === "Activity"){ businessTree.activities.push(group) }
    })
    return businessTree
}

function testBreakdown(){
    let total1 = esectors.length + bsectors.length + industryGroups.length + industries.length + activities.length
    let total2 = keys.length
    return total1 === total2
}

module.exports = {
    makeTree: makeTree
}

// Economic Sector => Business Sector => Industry Group => Industry => Activity