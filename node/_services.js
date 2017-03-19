const reuters = require('thomson-reuters-trbc')

class ReutersDataService {
    constructor(){ }

    static getReustersData() {
        return reuters.all();
    }

    static getReutersActivites(){
        return reuters.all().filter(datum => datum.code.toString().length === 10);
    }
    
    static getReutersIndustries(){
        return reuters.all().filter(datum => datum.code.toString().length === 8);
    }

    static getReutersIndustryGroups(){
        return reuters.all().filter(datum => datum.code.toString().length === 6);
    }
}

class CompareService {
    constructor() {}

    static breakIntoWords(str){
        return str
            .split(/[&,]/gi)
            .filter(word => word.length > 0 
                && word !== null
                && !(['is', 'to', 'and', 'in'].includes(word)))
            .map( word => word.trim().toLowerCase() );
    }
}

module.exports = {
    ReutersDataService: ReutersDataService,
    CompareService: CompareService
}