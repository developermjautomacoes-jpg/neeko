const SPREADSHEET_ID = "1_6WQrEKMcYlpoIoS_qCbESV3wFU9Z26AQhcryAL7ROQ";

function doPost(e) {
  try {
    const raw =
      e && e.postData && e.postData.contents ? e.postData.contents : "{}";
    const payload = JSON.parse(raw);
    const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
    const sheet =
      spreadsheet.getSheetByName("Respostas") || spreadsheet.getSheets()[0];

    const headers = ["Data", "Nome", "Telefone", "E-mail", "Assunto"];
    const currentHeaders = sheet
      .getRange(1, 1, 1, headers.length)
      .getValues()[0];
    const needsHeader = currentHeaders.every((value) => value !== headers[0]);

    if (needsHeader) {
      sheet.appendRow(headers);
    }

    sheet.appendRow([
      new Date(),
      payload.nome || "",
      payload.telefone || "",
      payload.email || "",
      payload.assunto || "",
    ]);

    return ContentService.createTextOutput(
      JSON.stringify({ ok: true, message: "Registro salvo com sucesso." }),
    ).setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    console.error("Erro ao gravar no Google Sheets:", error);
    return ContentService.createTextOutput(
      JSON.stringify({
        ok: false,
        message: error.message || "Erro ao processar a solicitação.",
      }),
    ).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService.createTextOutput(
    JSON.stringify({ ok: true, message: "Service running." }),
  ).setMimeType(ContentService.MimeType.JSON);
}

function doOptions() {
  return ContentService.createTextOutput("");
}
