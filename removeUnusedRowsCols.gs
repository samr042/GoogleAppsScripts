function onOpen() {
  /* Add the function to the spreadsheet as a button */
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Sheet mutation')
      .addItem('Remove excess rows/cols', 'removeUnusedRowsCols')
      .addToUi();
}

function removeUnusedRowsCols() {
  /*
   * This function deletes empty rows and columns,
   * one extra row and column are kept as padding,
   * the last column is resized to default row height.
   */

  // Get the active sheet
  var sheet = SpreadsheetApp.getActiveSheet();
  
  // Get the last used row/col, add one. These 
  // are the first row/col to be deleted
  var firstRowToDelete = sheet.getLastRow() + 1;
  var firstColToDelete = sheet.getLastColumn() + 1;
  
  // Get the last column and set width
  var maxCols = sheet.getMaxColumns();
  sheet.setColumnWidth(maxCols, 21);

  // Delete unuesed rows
  sheet.deleteRows(
    firstRowToDelete, 
    sheet.getMaxRows() - firstRowToDelete
  );

  // Delete unused columns
  sheet.deleteColumns(
    firstColToDelete, 
    maxCols - firstColToDelete
  );

  // TODO: clear formatting in padding row/col
  // TODO: fix out of bounds error when last row/col has data
}