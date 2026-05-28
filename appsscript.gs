// Tech Trek — Registros de Comunidad

function getOrCreateSheet(ss, name, headers) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    const header = sheet.getRange(1, 1, 1, headers.length);
    header.setValues([headers]);
    header.setFontWeight('bold');
    header.setBackground('#0d0d0d');
    header.setFontColor('#eec416');
    sheet.setFrozenRows(1);
    headers.forEach((_, i) => sheet.setColumnWidth(i + 1, i === headers.length - 1 ? 300 : 200));
  }
  return sheet;
}

function doPost(e) {
  try {
    const ss   = SpreadsheetApp.getActiveSpreadsheet();
    const data = JSON.parse(e.postData.contents);
    const fecha = Utilities.formatDate(
      new Date(),
      'America/Argentina/Buenos_Aires',
      'dd/MM/yyyy HH:mm'
    );

    if (data.tipo === 'empresa') {
      const sheet = getOrCreateSheet(ss, 'Empresas', ['Fecha', 'Nombre', 'Email', 'Empresa', 'Notas']);
      sheet.appendRow([fecha, data.nombre || '', data.email || '', data.empresa || '', data.notas || '']);
    } else {
      const sheet = getOrCreateSheet(ss, 'Estudiantes', ['Fecha', 'Nombre', 'Email', 'Notas']);
      sheet.appendRow([fecha, data.nombre || '', data.email || '', data.notas || '']);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({ ok: true, status: 'Tech Trek backend activo' }))
    .setMimeType(ContentService.MimeType.JSON);
}
