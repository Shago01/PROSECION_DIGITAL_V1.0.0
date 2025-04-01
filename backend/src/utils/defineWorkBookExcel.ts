import XLSX from 'xlsx';

export function defineWorkBookExcel(data: any) {
  const WorkSheet = XLSX.utils.json_to_sheet(data);
  const WorkBook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(WorkBook, WorkSheet, 'Nazarenos');

  return XLSX.write(WorkBook, { type: 'buffer', bookType: 'xlsx' });
}
