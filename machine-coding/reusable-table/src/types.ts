export interface Column {
  key: string;
  header: string;
  editable: boolean;
}

export interface RowData {
  [key: string]: string | number | boolean;
}
