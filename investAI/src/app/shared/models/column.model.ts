export interface Column {
    title: string;
    attributeName: string;
    accent?: boolean;
    badge?: boolean;
    editable?: boolean;
    pipeArgs?: string | ((args: any) => any);
    icon?: string;
    detail?: boolean;
    //secondary?: boolean;
}