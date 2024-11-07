export interface ProductDetailModel {
    status:   boolean;
    message:  string;
    response: Response;
}

export interface Response {
    id:          number;
    name:        string;
    description: string;
    sku:         string;
    stock:       number;
    category_id: string;
    price:       number;
    user_id:     number;
    image:       string;
    active:      number;
    created_at:  Date;
    updated_at:  null;
}
