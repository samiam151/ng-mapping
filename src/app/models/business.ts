export class Business {
    public name: string
    public address: string
    public owner: string
    public contact: string
    public email: string
    public phone: string
    public website: string
    public description: string
    public dateEstablished: string
    public ward: string
    public points: string
    public types: string[]
    public coords: Object

    static instances = 0

    constructor(business: Object) {        
        let info = business['info'];
        Business.instances++
        
        this.name = info.CompanyName;
        this.address = info.BusinessAddress1;
        this.owner = info.PrincipalOwner;
        this.contact = info.ContactName
        this.email = info.BusinessEMail;
        this.phone = info.BusinessPhone;
        this.website = info.BusinessWebsite;
        this.description = info.Description;
        this.dateEstablished = info.DateEstablished;
        this.ward = info.Ward;
        this.points = info.RefPoints.replace('/[\n\t]/g', "");

        this.address = business['address'];
        this.types = business['types'];
        this.coords = business['Coordinates'];
    }

    public toString() {
        return `${this.name}, by ${this.owner}`;
    }

    public static getInstances() {
        return Business.instances
    }

}