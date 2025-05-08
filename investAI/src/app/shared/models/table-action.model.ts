import { TableOperation } from "../constants/table-operation.constant";

export interface TableAction{
    operation: TableOperation;
    title: string;
    icon?: string;
    permission?: string[]
  };
  