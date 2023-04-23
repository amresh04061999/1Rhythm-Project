// country Model
export class Country {
  public countryId: number;
  public countryName: string;
  constructor(countryId: number, countryName: string) {
    this.countryId = countryId;
    this.countryName = countryName;
  }
}
// State model
export class State {
  public stateId: number;
  public countryId:number;
  public stateName: string;
  constructor(stateId: number, stateName: string,countryId:number) {
    this.stateId = stateId;
    this.countryId=countryId
    this.stateName = stateName;
  }
}
// city Model
export class City {
  public cityId: number;
  public cityName: string;
  public stateId:number;
  constructor(id: number, cityName: string,stateId:number) {
    this.cityId = -id;
    this.cityName = cityName;
    this.stateId=stateId;
  }
}
