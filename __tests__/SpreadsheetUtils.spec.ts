import SpreadsheetUtils from '../src/SpreadsheetUtils';

// GASの独自オブジェクトはモックする
SpreadsheetApp.openById = jest.fn(() => ({
  getSheetByName: jest.fn(() => ({
    getDataRange: jest.fn(() => ({
      getValues: jest.fn(() => [
        ['head1', 'head2'],
        ['value A2', 'value B2'],
        ['value A3', 'value B3'],
      ]),
    })),
  })),
})) as any;

describe('SpreadSheetUtils', () => {
  it('JSONで取得できる', () => {
    const ssu = new SpreadsheetUtils('ssid');
    const json = ssu.getSheetAsJson('sheet1');
    expect(json[0].head1).toBe('value A2');
    expect(json[0].head2).toBe('value B2');
    expect(json[1].head1).toBe('value A3');
    expect(json[1].head2).toBe('value B3');
  });
});
