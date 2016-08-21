/**
 * Created by Colus on 2016. 8. 21..
 */

export default class Project {
  
  constructor(id, projectName, companyName, startDate, endDate, skills, description) {
    this.id = id;
    this.projectName = projectName;
    this.companyName = companyName;
    this.startDate = startDate;
    this.endDate = endDate;
    this.skills = skills;
    this.description = description;
  }
  
  toString() {
    return `PrjectName : ${this.projectName}, StartDate : ${this.startDate}, EndDate : ${this.endDate}, Skills : ${this.skills}`;
  }
}