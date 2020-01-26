class CalendarUtils {
  public static readonly DAY = {
    SUNDAY: 0,
    MONDAY: 1,
    TUESDAY: 2,
    WEDNESDAY: 3,
    THURSDAY: 4,
    FRYDAY: 5,
    SATURDAY: 6
  };

  /**
   * ○年○月の○番目の○曜日のDateオブジェクトを取得する
   *
   * 時間は 00：00 に設定している。
   * @param year 年
   * @param month 月（JS的に-1しなくていい）
   * @param nth 何番目か
   * @param day 曜日
   */
  static getNthDayDate(year: number, month: number, nth: number, day: number): Date {
    const firstDate = new Date(year, month - 1, 1);
    const firstDateDay = firstDate.getDay();
    let firstDay = day - firstDateDay + 1;
    if (firstDay <= 0) firstDay += 7;
    firstDay += 7 * (nth - 1);
    const result = new Date(year, month - 1, firstDay);
    return result;
  }
}

export default CalendarUtils;
