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
  public stateName: string;
  constructor(stateId: number, stateName: string) {
    this.stateId = stateId;
    this.stateName = stateName;
  }
}
// city Model
export class City {
  public id: number;
  public cityName: string;
  constructor(id: number, cityName: string) {
    this.id = -id;
    this.cityName = cityName;
  }
}
