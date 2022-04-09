export interface IProductList {
	title: string;
	icon: string;
	id: number;
}

export type ProductContextState = {
  selectedProductList: IProductList[];
  addProduct: (add: IProductList) => void;
	removeProduct: (remove: IProductList) => void;
};

