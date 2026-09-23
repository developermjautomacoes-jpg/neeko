function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || '{}');
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = spreadsheet.getSheetByName('Respostas') || spreadsheet.getSheets()[0];

    const headers = ['Data', 'Nome', 'Telefone', 'E-mail', 'Assunto'];
    const currentHeaders = sheet.getRange(1, 1, 1, headers.length).getValues()[0];

    const needsHeader = currentHeaders.every((value) => value !== headers[0]);
    if (needsHeader) {
      sheet.appendRow(headers);
    }

    sheet.appendRow([
      new Date(),
      payload.nome || '',
      payload.telefone || '',
      payload.email || '',
      payload.assunto || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, message: 'Registro salvo com sucesso.' }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, message: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput('OK');
}
