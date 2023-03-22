
export class Users {
    public id:number;
    public profilePicture:any;
    public firstName:string;
    public lastName:string;
    public email:string;
    public password:string;
    public phoneNumber:number;
    public countryId:number;
    public stateId:number;
    public cityId:number;
    public userRoll:string;
    constructor(id:number,firstName:string,lastName:string,email:string,password:string,phoneNumber:number,countryId:number,stateId:number,
        cityId:number,userRoll:string){
             this.id=id
             this.firstName=firstName;
             this.lastName=lastName;
             this.email=email;
             this.password=password;
             this.phoneNumber=phoneNumber;
             this.countryId=countryId;
             this.stateId=stateId;
             this.cityId=cityId;
             this.userRoll=userRoll;
            }
}
