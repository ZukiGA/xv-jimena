// Google Apps Script — paste this in a new Google Sheets script editor
// Then deploy as Web App (Execute as: Me, Access: Anyone)

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = JSON.parse(e.postData.contents);
  
  sheet.appendRow([
    new Date(),
    data.name,
    data.guests,
    data.attending,
    data.message || ''
  ]);
  
  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}

function doGet() {
  return ContentService
    .createTextOutput('RSVP endpoint is working')
    .setMimeType(ContentService.MimeType.TEXT);
}
