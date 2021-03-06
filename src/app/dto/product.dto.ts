export interface Product{
    id : number;
    name : string;
    description: string;
    initialPrice : string;
    purchasedDate: Date;
    prodAge: number;
    depreciationValue: number;
    currentValue: number;
    categoryId: number;
    companyId: number;
}