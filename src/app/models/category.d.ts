export enum ParentCategory {
  FICTION = 'fiction',
  NON_FICTION = 'non-fiction'
}

export interface Category {
  id: number;
  title: string;
  parent: ParentCategory;
}
