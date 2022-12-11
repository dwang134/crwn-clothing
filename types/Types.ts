export type Item = {
    id: number;
    title: string;
    imageUrl: string;
}

export type Field = {
    displayName: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export type Product = {
    id: number;
    name: string;
    imageUrl: string;
    price: number
}

export type CartItemType = Product & {
    quantity: number;
}

export type ShopDataCollection = {
    title: string;
    item: Product [];
}

export type Categories = Product;

export type Category = {
    title: string
    items: Product [],
} 
