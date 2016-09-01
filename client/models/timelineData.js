/**
 * Created by Colus on 2016. 8. 21..
 */
import { DateTime, DateFormat, DateRange } from 'dateutils';

export default class TimeLineData {
  
  constructor(id, startDate, endDate, title, desc, badges) {
    this.id = id;
    this.startDate = DateFormat.format(DateTime.fromDateObject(startDate), 'Y-m');
    this.endDate = DateFormat.format(DateTime.fromDateObject(endDate), 'Y-m');
    this.title = title;
    this.desc = desc;
    this.badges = badges;
    
    const dateRange = new DateRange(DateTime.fromDateObject(startDate), DateTime.fromDateObject(endDate));
  
    this.period = new Object();
    this.period.year = 0;
    this.period.month = 0;
    if ( dateRange.isValid() ) {
      this.period.year = parseInt(dateRange.days() / 365);
      this.period.month = parseInt(dateRange.days() % 365 / 30);
    }
  }
}