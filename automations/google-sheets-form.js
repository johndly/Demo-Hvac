/**
 * WebMelior — Hero Page Form → Google Sheets
 *
 * SETUP (one time):
 * 1. Open your Google Sheet
 * 2. Extensions → Apps Script
 * 3. Delete any existing code, paste this entire file
 * 4. Click Deploy → New deployment → Web App
 *    - Execute as: Me
 *    - Who can access: Anyone
 * 5. Click Deploy, authorize when prompted
 * 6. Copy the Web App URL
 * 7. In index.html, replace SHEET_URL with that URL
 */

function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

  // Write column headers if the sheet is empty
  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      'Timestamp',
      'First Name',
      'Last Name',
      'Email',
      'Phone',
      'Trade',
      'Contact Preference',
      'Monthly Leads',
      'Message'
    ]);
    sheet.getRange(1, 1, 1, 9).setFontWeight('bold');
  }

  sheet.appendRow([
    new Date().toLocaleString(),
    e.parameter.fname          || '',
    e.parameter.lname          || '',
    e.parameter.email          || '',
    e.parameter.phone          || '',
    e.parameter.business       || '',
    e.parameter['contact-pref']  || '',
    e.parameter['monthly-leads'] || '',
    e.parameter.message        || ''
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: 'success' }))
    .setMimeType(ContentService.MimeType.JSON);
}
