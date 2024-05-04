import CalendarUtils from './CalendarUtils';

function exec() { // eslint-disable-line @typescript-eslint/no-unused-vars
  Logger.log(CalendarUtils.getNthDayDate(2019, 7, 3, CalendarUtils.DAY.SATURDAY));
}
