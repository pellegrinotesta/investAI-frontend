import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CsvExportService {

  constructor() { }

  exportToCsv(filename: string, data: any[]): void {
    if(!data || !data.length) {
      console.error('No data available for export');
      return;
    }
    const separator = ',';
    const keys = Object.keys(data[0]);
    const csvData = [
      keys.join(separator),
      ...data.map(row => keys.map(k => this.formatValue(row[k])).join(separator))
    ].join('\n');
    const blob = new Blob([csvData], {type: 'text/csv'});
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
  }

  private formatValue(value: any): string {
    if(value === null || value === undefined){
      return '';
    }
    if(typeof value === 'string') {
      return `"${value.replace(/"/g, '""')}"`;
    }
    return value.toString();
  }
 
}
