/**
 * Created by Colus on 2016. 8. 21..
 */
export default class Company {
  
  constructor(id, companyName, startDate, endDate, business) {
    this.id = id;
    this.companyName = companyName;
    this.startDate = startDate;
    this.endDate = endDate;
    this.business = business;
  }
}