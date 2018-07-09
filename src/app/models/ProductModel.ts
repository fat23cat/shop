export interface ProductModel {
    name: string;
    description: string;
    price: number;
    isAvailable: boolean;
    tags: Array<string>;
}