export enum bookTag {
  NEW = 'new',
  USED = 'used',
  BEST = 'best'
}

export interface SimpleBook {
  id: number;
  title: string;
  price: number;
  author: string;
  categoryId: number;
  categoryName: string;
  sale?: boolean;
  tag?: bookTag;
  in_stock: boolean;
  cover: string;
}

export interface ShortBook {
  id: number;
  title: string;
  author: string;
  cover: string;
  price: number;
}

export interface FullBook {
  id: number;
  title: string;
  price: number;
  author: string;
  categoryName: string;
  sale?: boolean;
  tag?: bookTag;
  in_stock: boolean;
  cover: string;
  description: string;
  product_information: string;
  other_details?: string;
  similar: ShortBook[];
}
