class SpreadsheetUtils {
  private ss: GoogleAppsScript.Spreadsheet.Spreadsheet;

  /**
   * コンストラクタ
   * @param sheetId スプレッドシートID
   */
  public constructor(sheetId: string) {
    this.ss = SpreadsheetApp.openById(sheetId);
  }

  /**
   * シートのデータをJSONとして取得する
   * @param name シート名
   */
  public getSheetAsJson(name: string): {[key: string]: any}[] { // eslint-disable-line @typescript-eslint/no-explicit-any
    const sheet = this.ss.getSheetByName(name);
    const values = sheet.getDataRange().getValues();
    const headers = values.shift();
    const json = values.map((value) => {
      const row: {[key: string]: any} = {}; // eslint-disable-line @typescript-eslint/no-explicit-any
      headers.forEach((header, i) => {
        row[String(header)] = value[i];
      });
      return row;
    });
    return json;
  }
}

export default SpreadsheetUtils;
