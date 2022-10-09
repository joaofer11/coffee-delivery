export interface IProduct {
   id: number;
   imagePath: string;
   name: string;
   price: number;
   amount: number;
}

export interface IProductTag {
   id: number;
   amount: number;
   price?: number;
}
