import Utils from '../src/CalendarUtils';

describe('CalendarUtils', () => {
  it('2019年7月の第3土曜日', () => {
    const date = Utils.getNthDayDate(2019, 7, 3, Utils.DAY.SATURDAY);
    expect(date).toStrictEqual(new Date(2019, 7 - 1, 20));
  });

  it('2019年11月の第3土曜日', () => {
    const date = Utils.getNthDayDate(2019, 11, 4, Utils.DAY.SATURDAY);
    expect(date).toStrictEqual(new Date(2019, 11 - 1, 23));
  });
});
