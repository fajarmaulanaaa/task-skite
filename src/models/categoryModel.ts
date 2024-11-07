export interface CategoryProductModel {
    status:   boolean;
    message:  string;
    response: Response[];
}

export interface Response {
    id:   number;
    name: string;
}
